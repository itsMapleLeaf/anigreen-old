import { apply, Configuration } from "twind"

const config: Configuration = {
	darkMode: "class",
	theme: {
		boxShadow: {
			DEFAULT: "0px 3px 8px rgba(0, 0, 0, 0.3)",
			inset: "0 0 8px inset rgba(0, 0, 0, 0.3)",
		},
		extend: {
			fontFamily: {
				sans: `"Fira Sans", sans-serif`,
				condensed: `"Fira Sans Condensed", sans-serif`,
			},
			transitionDuration: {
				DEFAULT: "0.2s",
			},
		},
	},
	variants: {
		"focus-visible": `&[data-focus-visible-added]`,
		"hactive": `&:hover, &:active`,
		"hocus": `&:hover, &:focus`,
		"reakit-transition-enter": `&[data-enter]`,
		"reakit-transition-child-enter": `[data-enter] &`,
	},
	plugins: {
		"backdrop-blur": { backdropFilter: `blur(4px)` },
		"isolate": { isolation: "isolate" },
	},
	preflight: {
		"body": apply`bg-gray-900 text-gray-100 break-words`,
		"button, [type=button], [type=reset], [type=submit]": {
			appearance: "none !important",
		},
		".js-focus-visible :focus:not(.focus-visible)": {
			outline: "none",
		},
		"[data-js-focus-visible] :focus:not([data-focus-visible-added])": {
			outline: "none",
		},
	},
}

export default config
