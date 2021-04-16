import react from "@vitejs/plugin-react-refresh"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
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
