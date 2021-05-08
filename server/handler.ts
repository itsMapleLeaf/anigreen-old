import assert from "assert"
import Axios from "axios"
import cookieSession from "cookie-session"
import "dotenv/config"
import express, { ErrorRequestHandler, Router } from "express"
import { request } from "https"
import morgan from "morgan"

function createHandler() {
	const handler = Router()

	handler.use(morgan("short"))

	handler.use(
		cookieSession({
			name: "session",
			secret: process.env["COOKIE_SECRET"] as string,
			httpOnly: true,
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

	handler.get("/auth-redirect", async (req, res) => {
		assert(req.session)

		const response = await Axios.post("https://anilist.co/api/v2/oauth/token", {
			grant_type: "authorization_code",
			client_id: process.env["ANILIST_APP_ID"],
			client_secret: process.env["ANILIST_APP_SECRET"],
			redirect_uri: process.env["ANILIST_REDIRECT_URL"],
			code: req.query.code,
		})

		req.session.user = {
			...response.data,
			expiresAt: Date.now() + response.data.expires_in * 1000,
		}

		res.redirect("/")
	})

	handler.get("/login", (req, res) => {
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

	handler.post("/anilist", async (req, res, next) => {
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
				anilistResponse.pipe(
					res.writeHead(
						anilistResponse.statusCode ?? 200,
						anilistResponse.headers,
					),
					{ end: true },
				)
			},
		)

		proxyRequest.on("error", next)
		req.pipe(proxyRequest, { end: true })
	})

	handler.get("/", (req, res) => {
		assert(req.session)

		if (req.session.user) {
			res.redirect("/watching")
		} else {
			res.redirect("/schedule")
		}
	})

	const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
		console.error(err.stack)
		res.status(500).send(err.message ?? "An internal error occurred")
	}
	handler.use(errorHandler)

	return handler
}

export const handler = express().use(createHandler())
