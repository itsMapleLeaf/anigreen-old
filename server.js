// @ts-check
const Axios = require("axios").default
const cookieSession = require("cookie-session")
const fs = require("fs/promises")
const path = require("path")
const express = require("express")
const { createServer: createViteServer } = require("vite")
const dotenv = require("dotenv")
const { Router } = require("express")
const https = require("https")

dotenv.config({
	path: path.join(__dirname, ".env.local"),
})

function createAuthRouter() {
	const router = Router()

	router.use((req, res, next) => {
		if (req.session.user && Date.now() > req.session.user.expiresAt) {
			req.session.user = undefined
		}
		next()
	})

	router.get("/auth-redirect", async (req, res, next) => {
		try {
			const response = await Axios.post(
				"https://anilist.co/api/v2/oauth/token",
				{
					grant_type: "authorization_code",
					client_id: process.env.VITE_ANILIST_APP_ID,
					client_secret: process.env.ANILIST_APP_SECRET,
					redirect_uri: process.env.VITE_ANILIST_REDIRECT_URL,
					code: req.query.code,
				},
			)

			req.session.user = {
				...response.data,
				expiresAt: Date.now() + response.data.expires_in * 1000,
			}

			res.redirect("/")
		} catch (error) {
			res.redirect("/auth-error")
			console.error(error)
		}
	})

	router.get("/logout", async (req, res) => {
		req.session.user = undefined
		res.redirect("/")
	})

	router.get("/session", async (req, res) => {
		return res.json({ authenticated: !!req.session.user })
	})

	router.post("/anilist", async (req, res) => {
		const headers = {
			"Content-Type": "application/json",
			Accept: "application/json",
		}

		if (req.session.user) {
			headers.Authorization = `Bearer ${req.session.user.access_token}`
		}

		const proxyRequest = https.request(
			`https://graphql.anilist.co`,
			{
				method: "POST",
				headers,
			},
			(apiResponse) => {
				res.status(apiResponse.statusCode)
				apiResponse.setEncoding("utf-8").pipe(res, { end: true })
			},
		)

		req.pipe(proxyRequest)
	})

	return router
}

async function createServer() {
	const vite = await createViteServer({ server: { middlewareMode: true } })

	const app = express()

	app.use(
		cookieSession({
			name: "session",
			secret: process.env.COOKIE_SECRET,
			path: "/",
			httpOnly: true,
		}),
	)

	app.use(createAuthRouter())

	app.use(vite.middlewares)

	app.use("*", async (req, res) => {
		const url = req.originalUrl

		try {
			const template = await fs.readFile(
				path.resolve(__dirname, "index.html"),
				"utf-8",
			)

			const transformed = await vite.transformIndexHtml(url, template)

			res.status(200).set({ "Content-Type": "text/html" }).end(transformed)
		} catch (e) {
			vite.ssrFixStacktrace(e)
			console.error(e)
			res.status(500).end(e.message)
		}
	})

	app.listen(3000, () => {
		console.info(`🚀 Server running on http://localhost:3000`)
	})
}

createServer()