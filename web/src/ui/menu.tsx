import constate from "constate"
import { ElementType, forwardRef, ReactNode, Ref, useMemo } from "react"
import type { PolymorphicPropsWithoutRef } from "react-polymorphic-types"
import {
	Menu as BaseMenu,
	MenuButton as BaseMenuButton,
	MenuInitialState,
	MenuItem as BaseMenuItem,
	useMenuState,
} from "reakit"
import { apply, tw } from "twind"

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

export const MenuButton = forwardRef(function MenuButton<
	T extends ElementType = "button"
>(
	{ as, ...props }: PolymorphicPropsWithoutRef<{ icon?: ReactNode }, T>,
	ref: Ref<HTMLButtonElement>,
) {
	const { menu, buttonId } = useMenuContext()
	return (
		<BaseMenuButton
			{...menu}
			id={buttonId}
			{...props}
			as={as ?? "button"}
			ref={ref}
		/>
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

export const MenuItem = forwardRef(function MenuItem<
	T extends ElementType = "button"
>(
	{
		as,
		children,
		className,
		id: idProp,
		keepOpen,
		...props
	}: PolymorphicPropsWithoutRef<{ id?: string; keepOpen?: boolean }, T>,
	ref: Ref<any>,
) {
	const { menu } = useMenuContext()
	const id = useMemo(() => idProp ?? `menu-button-${Math.random()}`, [idProp])

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
			as={as ?? "button"}
			id={id}
			className={tw(baseStyle, menu.currentId === id && activeStyle, className)}
			ref={ref}
			onClick={(...args: unknown[]) => {
				if (!keepOpen) menu.hide()
				props.onClick?.(...args)
			}}
		>
			{children}
		</BaseMenuItem>
	)
})
