import constate from "constate"
import { cloneElement, ReactElement, ReactNode, useRef } from "react"
import { FocusOn } from "react-focus-on"
import { apply, tw } from "twind"
import { css } from "twind/css"
import { useDisclosure } from "./disclosure"

const [MenuProvider, useMenuContext] = constate(function useMenu() {
	const disclosure = useDisclosure()
	const triggerRef = useRef<HTMLDivElement>()
	return { ...disclosure, triggerRef }
})

export function Menu({ children }: { children: ReactNode }) {
	return (
		<MenuProvider>
			<div className={tw`relative`}>{children}</div>
		</MenuProvider>
	)
}

export function MenuTrigger({ children }: { children: ReactElement }) {
	const menu = useMenuContext()
	return cloneElement(children, {
		onClick: (...args: unknown[]) => {
			menu.toggle()
			children.props.onClick?.(...args)
		},
		ref: menu.triggerRef,
	})
}

export function MenuItems({ children }: { children: ReactNode }) {
	const menu = useMenuContext()
	return (
		<FocusOn
			enabled={menu.isOpen}
			onEscapeKey={menu.close}
			onClickOutside={menu.close}
			shards={[menu.triggerRef]}
		>
			<div
				className={tw`
					absolute top-full mt-2 right-0
					bg-white text-gray-800
					w-max
					rounded
					overflow-hidden
					shadow
					transition-all
					flex flex-col
					${css({ transformOrigin: "top" })}
					${
						menu.isOpen
							? css({
									transform: `perspective(800px)`,
									opacity: "1",
									visibility: "visible",
							  })
							: css({
									transform: `perspective(800px) rotateX(-30deg) `,
									opacity: 0,
									visibility: "hidden",
							  })
					}
				`}
			>
				{children}
			</div>
		</FocusOn>
	)
}

export function MenuItem({
	children,
	icon,
}: {
	children: ReactElement
	icon?: ReactNode
}) {
	const menu = useMenuContext()
	return cloneElement(children, {
		className: tw`
			${apply`
				p-3
				leading-none font-medium text-left
				transition
				flex
				ring(2 inset transparent)
				hover:(bg-green-100 text-green-900)
				focus-visible:(outline-none ring-green-400)
			`}
			${icon ? `pl-9` : ""}
			${children.props.className ?? ""}
		`,
		onClick: (...args: unknown[]) => {
			children.props.onClick?.(...args)
			menu.close()
		},
		children: (
			<>
				{icon && (
					<span className={tw`absolute left-2 self-center`}>{icon}</span>
				)}
				{children.props.children}
			</>
		),
	})
}
