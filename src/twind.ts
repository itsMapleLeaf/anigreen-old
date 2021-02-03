import { apply, setup } from "twind"
import * as colors from "twind/colors"
import { domSheet } from "twind/sheets"

setup({
	darkMode: "class",
	theme: {
		colors: {
			gray: colors.gray,
		},
		boxShadow: {
			DEFAULT: "0px 4px 8px rgba(0, 0, 0, 0.1)",
		},
	},
	preflight: {
		body: apply`bg-gray-900 text-gray-100`,
	},
	sheet: domSheet(),
})
