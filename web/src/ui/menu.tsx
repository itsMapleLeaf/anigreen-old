import { Menu as BaseMenu } from "@headlessui/react"
import { Fragment, ReactElement, ReactNode } from "react"
import Slot from "../react/Slot"

export function Menu({ children }: { children: ReactNode }) {
	return (
		<BaseMenu>
			<div className="relative">{children}</div>
		</BaseMenu>
	)
}

export function MenuButton({ children }: { children: ReactElement }) {
	return <BaseMenu.Button as={Fragment}>{children}</BaseMenu.Button>
}

export function MenuPanel({ children }: { children: ReactNode }) {
	return (
		<BaseMenu.Items className="absolute right-0 mt-1 overflow-hidden text-gray-800 bg-white rounded shadow w-max top-full">
			{children}
		</BaseMenu.Items>
	)
}

export function MenuItem({ children }: { children: ReactElement }) {
	const baseClass = `block p-3 w-full leading-none font-medium text-left transition focus:outline-none`
	const activeClass = `bg-green-100 text-green-900`

	return (
		<BaseMenu.Item as={Fragment}>
			{({ active }) => (
				<Slot
					element={children}
					className={`${baseClass} ${active ? activeClass : ""}`}
				/>
			)}
		</BaseMenu.Item>
	)
}
