import preact from "@preact/preset-vite"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact()],
	resolve: {
		alias: {
			"react": "preact/compat",
			"react-dom": "preact/compat",
		},
	},
	// https://github.com/JoviDeCroock/prefresh/issues/321#issuecomment-819880115
	optimizeDeps: {
		exclude: [`@prefresh/vite/runtime`, `@prefresh/vite/utils`],
	},
	clearScreen: false,
	build: {
		sourcemap: true,
	},
})
