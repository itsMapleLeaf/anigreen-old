// @ts-check
const fs = require("fs/promises")
const path = require("path")
const express = require("express")
const { createServer: createViteServer } = require("vite")

async function createServer() {
	const app = express()

	const vite = await createViteServer({
		server: { middlewareMode: true },
	})

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
