import * as RadixMenu from "@radix-ui/react-dropdown-menu"
import { Slot } from "@radix-ui/react-slot"
import type { ReactElement, ReactNode, Ref } from "react"
import { autoRef } from "../react/helpers"

export function Menu({ children }: { children: ReactNode }) {
	return <RadixMenu.Root>{children}</RadixMenu.Root>
}

export const MenuButton = autoRef(function MenuButton(props: {
	children: ReactElement
	ref: Ref<unknown>
}) {
	return (
		<RadixMenu.Trigger as={Slot} ref={props.ref as any}>
			{props.children}
		</RadixMenu.Trigger>
	)
})

export function MenuPanel({ children }: { children: ReactNode }) {
	const baseClass = `bg-white text-gray-800 w-max rounded overflow-hidden shadow`
	return <RadixMenu.Content className={baseClass}>{children}</RadixMenu.Content>
}

export const MenuItem = autoRef(function MenuItem({
	children,
	onClick,
	ref,
}: {
	children: ReactNode
	onClick?: () => void
	ref: Ref<unknown>
}) {
	const baseClass = `
		block
		p-3 w-full
		leading-none font-medium text-left
		transition
		ring-2 ring-inset ring-transparent
		hover:bg-green-100 hover:text-green-900
		focus:ring-green-500 focus:outline-none
	`

	return (
		<RadixMenu.Item
			as={Slot as any}
			ref={ref as any}
			className={baseClass}
			onClick={onClick}
		>
			{children}
		</RadixMenu.Item>
	)
})
