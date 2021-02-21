import type { ReactNode } from "react"
import {
	Tooltip as BaseTooltip,
	TooltipReference,
	useTooltipState,
} from "reakit"
import { apply, tw } from "twind"

export default function Tooltip({
	text,
	children,
}: {
	text: string
	children: ReactNode
}) {
	const tooltip = useTooltipState({ animated: 200 })

	const tooltipStyle = apply`
		bg-white text-gray-900 rounded shadow p-1.5 text-sm leading-none font-medium
		transition duration-200 opacity-0 scale-90
		reakit-transition-child-enter:(opacity-100 scale-100)
	`

	return (
		<>
			<TooltipReference {...tooltip} className={tw`cursor-help`}>
				{children}
			</TooltipReference>
			<BaseTooltip {...tooltip}>
				<div className={tw(tooltipStyle)}>{text}</div>
			</BaseTooltip>
		</>
	)
}
