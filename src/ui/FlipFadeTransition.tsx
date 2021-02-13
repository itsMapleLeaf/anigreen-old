import { Transition } from "@headlessui/react"
import type { ReactNode } from "react"
import { tw } from "twind"
import { css } from "twind/css"

export function FlipFadeTransition({
	show,
	children,
}: {
	show: boolean
	children: ReactNode
}) {
	const outClass = tw(
		css({
			transform: `perspective(800px) rotateX(-30deg) `,
			opacity: 0,
			visibility: "hidden",
		}),
	)

	const inClass = tw(
		css({
			transform: `perspective(800px)`,
			opacity: "1",
			visibility: "visible",
		}),
	)

	return (
		<Transition
			show={show}
			className={tw`transition-all origin-top`}
			enterFrom={outClass}
			enterTo={inClass}
			leaveFrom={inClass}
			leaveTo={outClass}
		>
			{children}
		</Transition>
	)
}
