import constate from "constate"
import {
	cloneElement,
	ComponentPropsWithoutRef,
	forwardRef,
	ReactElement,
	ReactNode,
	Ref,
	useMemo,
} from "react"
import {
	Menu as BaseMenu,
	MenuButton as BaseMenuButton,
	MenuInitialState,
	MenuItem as BaseMenuItem,
	useMenuState,
} from "reakit"
import { apply, tw } from "twind"
import type { Merge } from "../helpers/types"

const [MenuProvider, useMenuContext] = constate(function useMenu(
	options?: MenuInitialState,
) {
	const menu = useMenuState({
		modal: true,
		placement: "bottom",
		gutter: 8,
		animated: 200,
		...options,
	})

	const buttonId = useMemo(() => `menu-button-${Math.random()}`, [])

	return { menu, buttonId }
})

export function Menu({
	children,
	...options
}: { children: ReactNode } & Partial<MenuInitialState>) {
	return <MenuProvider {...options}>{children}</MenuProvider>
}

export const MenuButton = forwardRef(function MenuButton(
	props: { children: ReactElement },
	ref: Ref<HTMLButtonElement>,
) {
	const { menu, buttonId } = useMenuContext()
	return (
		<BaseMenuButton {...menu} id={buttonId} ref={ref}>
			{(buttonProps) => cloneElement(props.children, buttonProps)}
		</BaseMenuButton>
	)
})

export function MenuPanel({
	children,
	className,
}: {
	children: ReactNode
	className?: string
}) {
	const { menu, buttonId } = useMenuContext()

	const baseStyle = apply`
		bg-white text-gray-800 w-max rounded overflow-hidden shadow
		transition duration-200 opacity-0 scale-95 
		reakit-transition-child-enter:(opacity-100 scale-100)
	`

	return (
		<BaseMenu {...menu} aria-labelledby={buttonId}>
			<div className={tw(baseStyle, className)}>
				{menu.visible || menu.animating ? children : null}
			</div>
		</BaseMenu>
	)
}

type MenuItemProps = Merge<
	ComponentPropsWithoutRef<"button">,
	{
		children: ReactElement
		keepOpen?: boolean
	}
>

export const MenuItem = forwardRef(function MenuItem(
	{ children, className, onClick, keepOpen, ...props }: MenuItemProps,
	ref: Ref<HTMLButtonElement>,
) {
	const { menu } = useMenuContext()
	const id = useMemo(() => `menu-button-${Math.random()}`, [])

	const baseStyle = apply`
		block
		p-3 w-full
		leading-none font-medium text-left
		transition
		ring(2 inset transparent)
	`

	const activeStyle = apply`bg-green-100 text-green-900`

	return (
		<BaseMenuItem
			{...menu}
			{...props}
			id={id}
			className={tw(baseStyle, menu.currentId === id && activeStyle, className)}
			ref={ref}
			onClick={(event) => {
				if (!keepOpen) menu.hide()
				onClick?.(event)
			}}
		>
			{(menuItemProps) => cloneElement(children, menuItemProps)}
		</BaseMenuItem>
	)
})
