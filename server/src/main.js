// @ts-check
import Axios from "axios"
import cookieSession from "cookie-session"
import "dotenv/config.js"
import express, { Router } from "express"
import { readFile } from "fs/promises"
import { request } from "https"
import { dirname, join, resolve } from "path"
import { fileURLToPath } from "url"
import { createServer as createViteServer } from "vite"

const __dirname = dirname(fileURLToPath(import.meta.url))
const webRoot = join(__dirname, "../../web")

function createAuthRouter() {
	const router = Router()

	router.use((req, res, next) => {
		if (req.session.user && Date.now() > req.session.user.expiresAt) {
			req.session.user = undefined
		}
		next()
	})

	router.get("/auth-redirect", async (req, res) => {
		try {
			const response = await Axios.post(
				"https://anilist.co/api/v2/oauth/token",
				{
					grant_type: "authorization_code",
					client_id: process.env.ANILIST_APP_ID,
					client_secret: process.env.ANILIST_APP_SECRET,
					redirect_uri: process.env.ANILIST_REDIRECT_URL,
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

	router.get("/login", async (req, res) => {
		res.redirect(
			`https://anilist.co/api/v2/oauth/authorize` +
				`?client_id=${process.env.ANILIST_APP_ID}` +
				`&redirect_uri=${process.env.ANILIST_REDIRECT_URL}` +
				`&response_type=code`,
		)
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
			(apiResponse) => {
				res.status(apiResponse.statusCode)
				apiResponse.setEncoding("utf-8").pipe(res, { end: true })
			},
		)

		req.pipe(proxyRequest)
	})

	return router
}

async function createDevRouter() {
	const router = Router()

	const vite = await createViteServer({
		root: webRoot,
		server: {
			middlewareMode: true,
		},
	})

	router.use(vite.middlewares)

	router.use("*", async (req, res) => {
		const url = req.originalUrl

		try {
			const template = await readFile(resolve(webRoot, "index.html"), "utf-8")

			const transformed = await vite.transformIndexHtml(url, template)

			res.status(200).set({ "Content-Type": "text/html" }).end(transformed)
		} catch (e) {
			vite.ssrFixStacktrace(e)
			console.error(e)
			res.status(500).end(e.message)
		}
	})

	return router
}

async function createServer() {
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

	if (process.env.NODE_ENV === "production") {
		app.use(express.static(join(webRoot, "dist")))
	} else {
		app.use(await createDevRouter())
	}

	const port = process.env.PORT || 3000
	app.listen(port, () => {
		console.info(`🚀 Server running on http://localhost:${port}`)
	})
}

createServer()
