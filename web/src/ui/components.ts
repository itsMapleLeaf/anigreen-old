import { apply } from "twind"

export const clearButtonStyle = apply`
	h-8 p-1 rounded-md transition
	hover:(bg-white bg-opacity-25)
`

export const clearIconButtonStyle = apply`
	${clearButtonStyle}
	w-7 h-7 p-0 flex items-center justify-center
`

export const solidButtonStyle = apply`
	h-10 px-2 rounded shadow
	transition-color
	bg-green-700 hover:bg-green-800
	leading-none text-sm text-white font-medium uppercase
`
