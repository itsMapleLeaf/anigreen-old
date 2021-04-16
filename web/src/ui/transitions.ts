import type { TransitionClasses } from "@headlessui/react"

export const fadeTransition: TransitionClasses = {
	enter: `transition duration-300`,
	enterFrom: `opacity-0`,
	enterTo: `opacity-100`,
	leave: `transition duration-300`,
	leaveFrom: `opacity-100`,
	leaveTo: `opacity-0`,
}

export const slideLeftTransition: TransitionClasses = {
	enter: `transition transform duration-300`,
	enterFrom: `-translate-x-full`,
	enterTo: `translate-x-0`,
	leave: `transition transform duration-300`,
	leaveFrom: `translate-x-0`,
	leaveTo: `-translate-x-full`,
}
