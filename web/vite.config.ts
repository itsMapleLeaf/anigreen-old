import reactRefresh from "@vitejs/plugin-react-refresh"
import { defineConfig } from "vite"
import { VitePWA } from "vite-plugin-pwa"

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
	plugins: [
		reactRefresh(),
		VitePWA({
			manifest: {
				start_url: "/",
				icons: [
					{
						sizes: "192x192",
						src: "/android-chrome-192x192.png",
						type: "image/png",
					},
					{
						sizes: "512x512",
						src: "/android-chrome-512x512.png",
						type: "image/png",
					},
				],
				background_color: `#111827`,
				theme_color: `#047857`,
			},
		}),
	],
})
