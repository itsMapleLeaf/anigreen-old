import assert from "assert"
import Axios from "axios"
import cookieSession from "cookie-session"
import "dotenv/config"
import express, { Router } from "express"
import { request } from "https"

function createHandler() {
	const handler = Router()

	handler.use(
		cookieSession({
			name: "session",
			secret: process.env["COOKIE_SECRET"] as string,
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

	// https://expressjs.com/en/resources/middleware/cookie-session.html#extending-the-session-expiration
	handler.use((req, res, next) => {
		assert(req.session)
		req.session.nowInMinutes = Math.floor(Date.now() / 60e3)
		next()
	})

	handler.get("/auth-redirect", (req, res) => {
		Axios.post("https://anilist.co/api/v2/oauth/token", {
			grant_type: "authorization_code",
			client_id: process.env["ANILIST_APP_ID"],
			client_secret: process.env["ANILIST_APP_SECRET"],
			redirect_uri: process.env["ANILIST_REDIRECT_URL"],
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
				`?client_id=${process.env["ANILIST_APP_ID"]}` +
				`&redirect_uri=${process.env["ANILIST_REDIRECT_URL"]}` +
				`&response_type=code`,
		)
	})

	handler.get("/logout", (req, res) => {
		assert(req.session)

		req.session.user = undefined
		res.redirect("/")
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
				for (const header in anilistResponse.headers) {
					res.setHeader(header, anilistResponse.headers[header] ?? "")
				}
				anilistResponse.setEncoding("utf-8").pipe(res, { end: true })
			},
		)

		req.pipe(proxyRequest)
	})

	handler.get("/", (req, res) => {
		assert(req.session)

		if (req.session.user) {
			res.redirect("/watching")
		} else {
			res.redirect("/schedule")
		}
	})

	return handler
}

export const handler = express().use(createHandler())
