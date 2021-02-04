import constate from "constate"
import { cloneElement, useRef, useState } from "react"
import { FocusOn } from "react-focus-on"
import { tw } from "twind"
import { css } from "twind/css"

const [MenuProvider, useMenuContext] = constate(function useMenu() {
	const [isOpen, setOpen] = useState(false)
	const triggerRef = useRef<HTMLDivElement>()
	const open = () => setOpen(true)
	const close = () => setOpen(false)
	const toggle = () => setOpen((open) => !open)
	return { isOpen, open, close, toggle, triggerRef }
})

export function Menu({ children }: { children: React.ReactNode }) {
	return (
		<MenuProvider>
			<div className={tw`relative`}>{children}</div>
		</MenuProvider>
	)
}

export function MenuTrigger({ children }: { children: React.ReactElement }) {
	const menu = useMenuContext()
	return cloneElement(children, {
		onClick: (...args: unknown[]) => {
			menu.toggle()
			children.props.onClick?.(...args)
		},
		ref: menu.triggerRef,
	})
}

export function MenuItems({ children }: { children: React.ReactNode }) {
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
									transform: `perspective(800px) rotateX(0)`,
									opacity: "1",
									visibility: "visible",
							  })
							: css({
									transform: `perspective(800px) rotateX(-30deg)`,
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

export function MenuItem({ children }: { children: React.ReactElement }) {
	const menu = useMenuContext()
	return cloneElement(children, {
		className: tw`
			py-3 pl-3 pr-6
			leading-none font-medium text-left
			transition
			ring(2 inset transparent)
			hover:(bg-green-100 text-green-900)
			focus-visible:(outline-none ring-green-400)
		`,
		onClick: (...args: unknown[]) => {
			children.props.onClick?.(...args)
			menu.close()
		},
	})
}
