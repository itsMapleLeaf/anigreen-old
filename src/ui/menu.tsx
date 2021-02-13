import { Menu as BaseMenu } from "@headlessui/react"
import {
	cloneElement,
	createContext,
	Fragment,
	ReactElement,
	ReactNode,
	useContext,
} from "react"
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
