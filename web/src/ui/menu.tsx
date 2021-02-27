import * as RadixMenu from "@radix-ui/react-dropdown-menu"
import { Slot } from "@radix-ui/react-slot"
import { forwardRef, ReactElement, ReactNode, Ref } from "react"
import { apply, tw } from "twind"
import { css } from "twind/css"
import { radixTransitionCustom } from "./helpers"

export function Menu({ children }: { children: ReactNode }) {
	return <RadixMenu.Root>{children}</RadixMenu.Root>
}

export const MenuButton = forwardRef(function MenuButton(
	props: { children: ReactElement },
	ref: Ref<unknown>,
) {
	return (
		<RadixMenu.Trigger as={Slot} ref={ref as any}>
			{props.children}
		</RadixMenu.Trigger>
	)
})

export function MenuPanel({ children }: { children: ReactNode }) {
	const baseStyle = apply`
		bg-white text-gray-800 w-max rounded overflow-hidden shadow
		${radixTransitionCustom({
			start: apply`opacity-0 ${css({ transform: `scale(0.9)` })}`,
			end: apply`opacity-100 ${css({ transform: `scale(1.0)` })}`,
		})}
	`
	return (
		<RadixMenu.Content className={tw(baseStyle)}>{children}</RadixMenu.Content>
	)
}

export const MenuItem = forwardRef(function MenuItem(
	{ children, onClick }: { children: ReactNode; onClick?: () => void },
	ref: Ref<unknown>,
) {
	const baseStyle = apply`
		block
		p-3 w-full
		leading-none font-medium text-left
		transition
		ring(2 inset transparent)
		hocus:(bg-green-100 text-green-900)
	`

	return (
		<RadixMenu.Item
			as={Slot as any}
			ref={ref as any}
			className={tw(baseStyle)}
			onClick={onClick}
		>
			{children}
		</RadixMenu.Item>
	)
})
