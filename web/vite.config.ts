import react from "@vitejs/plugin-react-refresh"
import { defineConfig } from "vite"
import mix from "vite-plugin-mix"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), mix({ handler: "./handler.ts" })],
	esbuild: {
		jsxInject: `import * as jsx from 'react'`,
		jsxFactory: `jsx.createElement`,
		jsxFragment: `jsx.Fragment`,
	},
	clearScreen: false,
	build: {
		sourcemap: true,
	},
})
