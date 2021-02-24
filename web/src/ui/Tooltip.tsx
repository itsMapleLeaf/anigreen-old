import { cloneElement, ReactElement } from "react"
import {
	Tooltip as BaseTooltip,
	TooltipReference,
	useTooltipState,
} from "reakit"
import { apply, tw } from "twind"

type Props = {
	text: string
	children: ReactElement
}

export default function Tooltip({ text, children }: Props) {
	const tooltip = useTooltipState({
		animated: 200,
	})

	const tooltipStyle = apply`
		bg-white text-gray-900 rounded shadow p-1.5 text-sm leading-none font-medium
		transition duration-200 opacity-0 scale-90
		reakit-transition-child-enter:(opacity-100 scale-100)
	`

	return (
		<>
			<TooltipReference {...tooltip}>
				{(referenceProps) => cloneElement(children, referenceProps)}
			</TooltipReference>
			<BaseTooltip {...tooltip}>
				<div className={tw(tooltipStyle)}>{text}</div>
			</BaseTooltip>
		</>
	)
}
