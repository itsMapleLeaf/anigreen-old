import { Arrow, Content, Root, Trigger } from "@radix-ui/react-tooltip"
import type { ReactNode } from "react"
import { apply } from "twind"
import { css } from "twind/css"
import { radixTransitionCustom } from "./helpers"

type Props = {
	text: string
	children: ReactNode
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
		<Root delayDuration={300}>
			<Trigger tw={css({ textAlign: "inherit" })}>{children}</Trigger>
			<Content tw={tooltipStyle} side="top" sideOffset={8}>
				<Arrow tw="text-white fill-current" />
				{text}
			</Content>
		</Root>
	)
}
