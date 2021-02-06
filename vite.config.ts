import prefresh from "@prefresh/vite"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
	esbuild: {
		jsxInject: `import * as jsx from 'react'`,
		jsxFactory: `jsx.createElement`,
		jsxFragment: `jsx.Fragment`,
	},
	plugins: [prefresh()],
	clearScreen: false,
	alias: {
		react: "preact/compat",
		"react-dom": "preact/compat",
	},
})
