const plugin = require("tailwindcss/plugin")

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
	mode: "jit",
	purge: [
		`${__dirname}/public/**/*.html`,
		`${__dirname}/src/**/*.{js,jsx,ts,tsx,vue}`,
	],
	darkMode: false, // or 'media' or 'class'
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
	plugins: [focusVisiblePolyfillPlugin()],
}

function focusVisiblePolyfillPlugin() {
	return plugin(function ({ addVariant, addBase, e }) {
		addBase({
			".js-focus-visible :focus:not(.focus-visible)": {
				outline: "none",
			},
			"[data-js-focus-visible] :focus:not([data-focus-visible-added])": {
				outline: "none",
			},
		})

		addVariant("focus-visible", ({ modifySelectors, separator }) => {
			modifySelectors(({ className }) => {
				return `.${e(
					`focus-visible${separator}${className}`,
				)}[data-focus-visible-added]`
			})
		})
	})
}
