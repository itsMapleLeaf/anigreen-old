import type { ReactNode } from "react"
import { apply, tw } from "twind"

const baseStyle = apply`
	transition
	bg-green-700 hover:bg-green-800
	leading-none text-sm text-white font-medium uppercase
	flex items-center justify-center
	h-10 px-2 space-x-1
	rounded
	shadow
`

export default function Button(props: {
	title?: string
	className?: string
	label?: string
	icon?: ReactNode
	onClick?: () => void
}) {
	return (
		<button
			type="button"
			className={tw`${baseStyle} ${props.className}`}
			title={props.title}
			onClick={props.onClick}
		>
			{props.icon && <span>{props.icon}</span>}
			{props.label && <span className={tw`px-1`}>{props.label}</span>}
		</button>
	)
}
