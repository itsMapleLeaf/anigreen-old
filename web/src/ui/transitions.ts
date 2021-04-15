import type { TransitionClasses } from "@headlessui/react"
import { tw } from "twind"

export const fadeTransition: TransitionClasses = {
	enter: tw`transition duration-300`,
	enterFrom: tw`opacity-0`,
	enterTo: tw`opacity-100`,
	leave: tw`transition duration-300`,
	leaveFrom: tw`opacity-100`,
	leaveTo: tw`opacity-0`,
}

export const slideLeftTransition: TransitionClasses = {
	enter: tw`transition transform duration-300`,
	enterFrom: tw`-translate-x-full`,
	enterTo: tw`translate-x-0`,
	leave: tw`transition transform duration-300`,
	leaveFrom: tw`translate-x-0`,
	leaveTo: tw`-translate-x-full`,
}
