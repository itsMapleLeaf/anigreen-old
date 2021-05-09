import assert from "assert"
import Axios from "axios"
import cookieSession from "cookie-session"
import "dotenv/config"
import express, { ErrorRequestHandler } from "express"
import proxy from "express-http-proxy"
import morgan from "morgan"

const oneDayMs = 1000 * 60 * 60 * 24

const app = express()

app.use(morgan("short"))

app.use(
	cookieSession({
		name: "session",
		secret: process.env["COOKIE_SECRET"] as string,
		httpOnly: true,
		expires: new Date(Date.now() + oneDayMs * 30),
	}),
)

app.use((req, res, next) => {
	assert(req.session)

	if (req.session.user && Date.now() > req.session.user.expiresAt) {
		req.session.user = undefined
	}
	next()
})

// https://expressjs.com/en/resources/middleware/cookie-session.html#extending-the-session-expiration
app.use((req, res, next) => {
	assert(req.session)
	req.session.nowInMinutes = Math.floor(Date.now() / 60e3)
	next()
})

app.get("/auth-redirect", async (req, res) => {
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

app.get("/login", (req, res) => {
	res.redirect(
		`https://anilist.co/api/v2/oauth/authorize` +
			`?client_id=${process.env["ANILIST_APP_ID"]}` +
			`&redirect_uri=${process.env["ANILIST_REDIRECT_URL"]}` +
			`&response_type=code`,
	)
})

app.get("/logout", (req, res) => {
	assert(req.session)

	req.session.user = undefined
	res.redirect("/")
})

app.use(
	"/anilist",
	proxy(`https://graphql.anilist.co`, {
		proxyReqOptDecorator(options, req) {
			if (!req.session!.user) {
				return options
			}

			return {
				...options,
				headers: {
					...options.headers,
					Authorization: `Bearer ${req.session!.user.access_token}`,
				},
			}
		},
	}),
)

app.get("/", (req, res) => {
	assert(req.session)

	if (req.session.user) {
		res.redirect("/watching")
	} else {
		res.redirect("/schedule")
	}
})

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
	console.error(error?.stack || error?.message || error)
	res.status(500).send(error?.message || "An internal error occurred")
}
app.use(errorHandler)

export { app as handler }
