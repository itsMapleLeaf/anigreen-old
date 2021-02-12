import "focus-visible"
import { apply, setup } from "twind"
import * as colors from "twind/colors"
import { css } from "twind/css"

setup({
	darkMode: "class",
	theme: {
		boxShadow: {
			DEFAULT: "0px 3px 8px rgba(0, 0, 0, 0.3)",
			inset: "0 0 8px inset rgba(0, 0, 0, 0.3)",
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
		"body": css(apply`bg-gray-900 text-gray-100`, {
			wordBreak: "break-word",
		}),
		".js-focus-visible :focus:not(.focus-visible)": {
			outline: "none",
		},
		"[data-js-focus-visible] :focus:not([data-focus-visible-added])": {
			outline: "none",
		},
	},
	variants: {
		"focus-visible": `&[data-focus-visible-added]`,
		"hactive": `&:hover, &:active`,
	},
	plugins: {
		"backdrop-blur": { backdropFilter: `blur(4px)` },
	},
})
