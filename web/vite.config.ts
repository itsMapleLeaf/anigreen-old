import twindJsx from "@twind/vite-plugin-jsx"
import reactRefresh from "@vitejs/plugin-react-refresh"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
	esbuild: {
		jsxInject: `import * as jsx from 'react'`,
		jsxFactory: `jsx.createElement`,
		jsxFragment: `jsx.Fragment`,
	},
	clearScreen: false,
	build: {
		sourcemap: true,
	},
	plugins: [reactRefresh(), twindJsx()],
})
