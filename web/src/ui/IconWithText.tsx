import type { ReactNode } from "react"
import { apply, tw } from "twind"

export default function IconWithText(props: {
	text: ReactNode
	iconLeft?: ReactNode
	iconRight?: ReactNode
}) {
	const iconStyle = apply`h-4 flex items-center`
	return (
		<span className={tw`flex items-center space-x-1`}>
			{props.iconLeft && (
				<span className={tw`${iconStyle} -ml-1`}>{props.iconLeft}</span>
			)}
			<span>{props.text}</span>
			{props.iconRight && (
				<span className={tw`${iconStyle} -mr-1`}>{props.iconRight}</span>
			)}
		</span>
	)
}
