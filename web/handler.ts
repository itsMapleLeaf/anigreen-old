/// <reference types="vite/client" />
import assert from "assert"
import Axios from "axios"
import cookieSession from "cookie-session"
import { Router } from "express"
import { request } from "https"

function createHandler() {
	const handler = Router()

	handler.use(
		cookieSession({
			name: "session",
			secret: import.meta.env.VITE_COOKIE_SECRET as string,
			httpOnly: true,
			sameSite: "lax",
		}),
	)

	handler.use((req, res, next) => {
		assert(req.session)

		if (req.session.user && Date.now() > req.session.user.expiresAt) {
			req.session.user = undefined
		}
		next()
	})

	handler.get("/auth-redirect", (req, res) => {
		Axios.post("https://anilist.co/api/v2/oauth/token", {
			grant_type: "authorization_code",
			client_id: import.meta.env.VITE_ANILIST_APP_ID,
			client_secret: import.meta.env.VITE_ANILIST_APP_SECRET,
			redirect_uri: import.meta.env.VITE_ANILIST_REDIRECT_URL,
			code: req.query.code,
		})
			.then((response) => {
				assert(req.session)

				req.session.user = {
					...response.data,
					expiresAt: Date.now() + response.data.expires_in * 1000,
				}

				res.redirect("/")
			})
			.catch((error) => {
				res.redirect("/auth-error")
				console.error(error)
			})
	})

	handler.get("/login", async (req, res) => {
		res.redirect(
			`https://anilist.co/api/v2/oauth/authorize` +
				`?client_id=${import.meta.env.VITE_ANILIST_APP_ID}` +
				`&redirect_uri=${import.meta.env.VITE_ANILIST_REDIRECT_URL}` +
				`&response_type=code`,
		)
	})

	handler.get("/logout", (req, res) => {
		assert(req.session)

		req.session.user = undefined
		res.redirect("/")
	})

	handler.get("/session", (req, res) => {
		assert(req.session)

		return res.json({ authenticated: !!req.session.user })
	})

	handler.post("/anilist", (req, res) => {
		assert(req.session)

		const headers: { [name: string]: string } = {
			"Content-Type": "application/json",
			"Accept": "application/json",
		}

		if (req.session.user) {
			headers.Authorization = `Bearer ${req.session.user.access_token}`
		}

		const proxyRequest = request(
			`https://graphql.anilist.co`,
			{
				method: "POST",
				headers,
			},
			(anilistResponse) => {
				res.statusCode = anilistResponse.statusCode ?? res.statusCode
				res.setHeader("Content-Type", "application/json")
				anilistResponse.setEncoding("utf-8").pipe(res, { end: true })
			},
		)

		req.pipe(proxyRequest)
	})

	return handler
}

export const handler = createHandler()
