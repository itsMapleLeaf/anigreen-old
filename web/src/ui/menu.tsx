import { Menu as BaseMenu, Transition } from "@headlessui/react"
import type { Placement } from "@popperjs/core"
import constate from "constate"
import {
	cloneElement,
	Fragment,
	ReactElement,
	ReactNode,
	useState,
} from "react"
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

export function MenuButton({ children }: { children: ReactElement }) {
	const { setButtonElement } = useMenuContext()
	return (
		// @ts-expect-error
		<BaseMenu.Button as={Fragment} ref={setButtonElement}>
			{children}
		</BaseMenu.Button>
	)
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

export function MenuItem({
	children,
	icon,
}: {
	children: ReactElement
	icon?: ReactNode
}) {
	return (
		<BaseMenu.Item>
			{({ active }) =>
				cloneElement(children, {
					className: tw(
						apply`
							py-3 px-4
							w-full
							leading-none font-medium text-left
							transition
							flex
							ring(2 inset transparent)
						`,
						icon && `pl-8`,
						active && apply`bg-green-100 text-green-900`,
						children.props.className,
					),
					children: (
						<>
							{children.props.children}
							<span className={tw`absolute left-2 self-center`}>{icon}</span>
						</>
					),
				})
			}
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
