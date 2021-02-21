import constate from "constate"
import { ElementType, ReactNode, useMemo } from "react"
import type { PolymorphicPropsWithoutRef } from "react-polymorphic-types"
import {
	Menu as BaseMenu,
	MenuButton as BaseMenuButton,
	MenuInitialState,
	MenuItem as BaseMenuItem,
	useMenuState,
} from "reakit"
import { apply, tw } from "twind"
import { css } from "twind/css"

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

export function MenuButton<T extends ElementType = "button">({
	as,
	...props
}: PolymorphicPropsWithoutRef<{ icon?: ReactNode }, T>) {
	const { menu, buttonId } = useMenuContext()
	return (
		<BaseMenuButton {...menu} id={buttonId} {...props} as={as ?? "button"} />
	)
}

export function MenuPanel({
	children,
	className,
}: {
	children: ReactNode
	className?: string
}) {
	const { menu, buttonId } = useMenuContext()

	const enterStyle = css({
		transform: `perspective(800px)`,
		opacity: "1",
		visibility: "visible",
	})

	const exitStyle = css({
		transform: `perspective(800px) rotateX(-30deg)`,
		opacity: 0,
		visibility: "hidden",
	})

	const baseStyle = apply`
		bg-white text-gray-800 w-max rounded overflow-hidden shadow
		transition-all duration-200 origin-top
		${exitStyle}
		reakit-transition-child-enter:${enterStyle}
	`

	return (
		<BaseMenu {...menu} aria-labelledby={buttonId}>
			<div className={tw(baseStyle, className)}>{children}</div>
		</BaseMenu>
	)
}

export function MenuItem<T extends ElementType = "button">({
	as,
	children,
	icon,
	className,
	id: idProp,
	...props
}: PolymorphicPropsWithoutRef<{ icon?: ReactNode; id?: string }, T>) {
	const { menu } = useMenuContext()
	const id = useMemo(() => idProp ?? `menu-button-${Math.random()}`, [idProp])

	const baseStyle = apply`
		py-3 px-4
		w-full
		leading-none font-medium text-left
		transition
		flex
		ring(2 inset transparent)
		${icon && `pl-8`}
	`

	const activeStyle = apply`bg-green-100 text-green-900`

	return (
		<BaseMenuItem
			{...menu}
			{...props}
			as={as ?? "button"}
			id={id}
			className={tw(baseStyle, menu.currentId === id && activeStyle, className)}
		>
			<span>{children}</span>
			<span className={tw`absolute left-2 self-center`}>{icon}</span>
		</BaseMenuItem>
	)
}
