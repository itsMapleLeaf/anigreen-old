import { Slot } from "@radix-ui/react-slot"
import { Arrow, Content, Root, Trigger } from "@radix-ui/react-tooltip"
import type { ReactElement } from "react"
import { apply, tw } from "twind"
import { css } from "twind/css"
import { radixTransitionCustom } from "./helpers"

type Props = {
	text: string
	children: ReactElement
}

export default function Tooltip({ text, children }: Props) {
	const tooltipStyle = apply`
		bg-white text-gray-900 rounded shadow p-1.5 text-sm leading-none font-medium
		${radixTransitionCustom({
			start: apply`opacity-0 ${css({ transform: `scale(0.9)` })}`,
			end: apply`opacity-100 ${css({ transform: `scale(1.0)` })}`,
		})}
	`

	return (
		<Root>
			<Trigger as={Slot}>{children}</Trigger>
			<Content className={tw(tooltipStyle)} side="top" sideOffset={8}>
				<Arrow className={tw`fill-current text-white`} />
				{text}
			</Content>
		</Root>
	)
}
