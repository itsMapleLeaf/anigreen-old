import type { TransitionClasses } from "@headlessui/react"
import { tw } from "twind"
import { css } from "twind/css"

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

export const flipFadeTransition: TransitionClasses & { className: string } = {
	className: tw`transition-all origin-top`,
	enterFrom: outClass,
	enterTo: inClass,
	leaveFrom: inClass,
	leaveTo: outClass,
}
