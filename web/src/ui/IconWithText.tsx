import type { ReactNode } from "react"

export default function IconWithText(props: {
	text: ReactNode
	iconLeft?: ReactNode
	iconRight?: ReactNode
}) {
	const iconStyle = `h-4 flex items-center`
	return (
		<span className="flex items-center space-x-1">
			{props.iconLeft && (
				<span className={`${iconStyle} -ml-1`}>{props.iconLeft}</span>
			)}
			<span>{props.text}</span>
			{props.iconRight && (
				<span className={`${iconStyle} -mr-1`}>{props.iconRight}</span>
			)}
		</span>
	)
}
