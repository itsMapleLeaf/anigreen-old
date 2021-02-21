import { Menu as BaseMenu, Transition } from "@headlessui/react"
import type { Placement } from "@popperjs/core"
import constate from "constate"
import { ElementType, ReactNode, useState } from "react"
import type { PolymorphicPropsWithoutRef } from "react-polymorphic-types"
import { usePopper } from "react-popper"
import { apply, tw } from "twind"
import { css } from "twind/css"
import Portal from "./Portal"

const [MenuProvider, useMenuContext] = constate(function useMenu({
	open,
}: {
	open: boolean
}) {
	const [buttonElement, setButtonElement] = useState<HTMLElement | null>()
	return { open, buttonElement, setButtonElement }
})

export function Menu({ children }: { children: ReactNode }) {
	return (
		<BaseMenu>
			{({ open }) => (
				<div className={tw`relative`}>
					<MenuProvider open={open}>{children}</MenuProvider>
				</div>
			)}
		</BaseMenu>
	)
}

export function MenuButton<T extends ElementType = "button">({
	...props
}: PolymorphicPropsWithoutRef<{ icon?: ReactNode }, T>) {
	const { setButtonElement } = useMenuContext()
	return <BaseMenu.Button {...props} ref={setButtonElement} />
}

export function MenuPanel({
	children,
	placement,
	offset = [0, 10],
}: {
	children: ReactNode
	placement?: Placement
	offset?: [horizontal: number, vertical: number]
}) {
	const { open, buttonElement } = useMenuContext()
	const [popperElement, setPopperElement] = useState<HTMLElement | null>()

	const { styles } = usePopper(buttonElement, popperElement, {
		placement,
		modifiers: [{ name: "offset", options: { offset } }],
	})

	return (
		<Transition show={open}>
			<Portal>
				<div ref={setPopperElement} style={styles.popper}>
					<Transition.Child {...flipFadeTransition()}>
						<BaseMenu.Items
							static
							className={tw(apply`
								bg-white text-gray-800
								w-max
								rounded
								overflow-hidden
								shadow
							`)}
						>
							{children}
						</BaseMenu.Items>
					</Transition.Child>
				</div>
			</Portal>
		</Transition>
	)
}

export function MenuItem<T extends ElementType = "button">({
	as,
	children,
	icon,
	className,
	...props
}: PolymorphicPropsWithoutRef<{ icon?: ReactNode }, T>) {
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

	const Component = as ?? "button"

	return (
		<BaseMenu.Item>
			{({ active }) => (
				<Component
					{...props}
					className={tw(baseStyle, active && activeStyle, className)}
				>
					<span>{children}</span>
					<span className={tw`absolute left-2 self-center`}>{icon}</span>
				</Component>
			)}
		</BaseMenu.Item>
	)
}

function flipFadeTransition() {
	const outClass = tw(
		css({
			transform: `perspective(800px) rotateX(-30deg)`,
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

	return {
		className: tw`transition-all origin-top`,
		enterFrom: outClass,
		enterTo: inClass,
		leaveFrom: inClass,
		leaveTo: outClass,
	}
}
