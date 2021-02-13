import Portal from "./Portal"
import { Menu as BaseMenu } from "@headlessui/react"
import { Fragment, ReactNode, createContext, useContext } from "react"
import { apply, tw } from "twind"
import { FlipFadeTransition } from "./FlipFadeTransition"

const OpenContext = createContext(false)

export function Menu({ children }: { children: ReactNode }) {
	return (
		<BaseMenu>
			{({ open }) => (
				<div className={tw`relative`}>
					<OpenContext.Provider value={open}>{children}</OpenContext.Provider>
				</div>
			)}
		</BaseMenu>
	)
}

export function MenuButton({ children }: { children: ReactNode }) {
	return <BaseMenu.Button as={Fragment}>{children}</BaseMenu.Button>
}

export function MenuPanel({ children }: { children: ReactNode }) {
	const open = useContext(OpenContext)
	return (
		<Portal>
			<FlipFadeTransition show={open}>
				<BaseMenu.Items
					static
					className={tw(apply`
					absolute top-full mt-2 right-0
					bg-white text-gray-800
					w-max
					rounded
					overflow-hidden
					shadow
				`)}
				>
					{children}
				</BaseMenu.Items>
			</FlipFadeTransition>
		</Portal>
	)
}

export function MenuItem({
	label,
	icon,
	onClick,
}: {
	label: string
	icon: ReactNode
	onClick: () => void
}) {
	return (
		<BaseMenu.Item>
			{({ active }) => (
				<button
					type="button"
					className={tw(
						apply`
							p-3 pl-9
							leading-none font-medium text-left
							transition
							flex
							ring(2 inset transparent)
						`,
						active && apply`bg-green-100 text-green-900`,
					)}
					onClick={onClick}
				>
					<span className={tw`absolute left-2 self-center`}>{icon}</span>
					{label}
				</button>
			)}
		</BaseMenu.Item>
	)
}
