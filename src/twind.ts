import { apply, setup } from "twind"
import * as colors from "twind/colors"
import { css } from "twind/css"

setup({
	darkMode: "class",
	theme: {
		boxShadow: {
			DEFAULT: "0px 3px 6px rgba(0, 0, 0, 0.2)",
		},
		extend: {
			colors: {
				gray: colors.gray,
			},
			transitionDuration: {
				DEFAULT: "0.2s",
			},
		},
	},
	preflight: {
		body: css(apply`bg-gray-900 text-gray-100`, {
			wordWrap: "break-word",
		}),
	},
	variants: {
		"focus-visible": `&[data-focus-visible-added]`,
	},
})
