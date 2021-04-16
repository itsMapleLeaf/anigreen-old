import { Menu as BaseMenu, Transition } from "@headlessui/react"
import * as React from "react"
import Slot from "../react/Slot"

const OpenContext = React.createContext(false)

export function Menu({ children }: { children: React.ReactNode }) {
	return (
		<BaseMenu>
			{({ open }) => (
				<OpenContext.Provider value={open}>
					<div className="relative">{children}</div>
				</OpenContext.Provider>
			)}
		</BaseMenu>
	)
}

export function MenuButton({ children }: { children: React.ReactElement }) {
	return <BaseMenu.Button as={React.Fragment}>{children}</BaseMenu.Button>
}

export function MenuPanel({ children }: { children: React.ReactNode }) {
	const open = React.useContext(OpenContext)
	return (
		<Transition
			show={open}
			enter="transition duration-100"
			enterFrom="transform scale-95 opacity-0"
			enterTo="transform scale-100 opacity-100"
			leave="transition duration-100"
			leaveFrom="transform scale-100 opacity-100"
			leaveTo="transform scale-95 opacity-0"
		>
			<BaseMenu.Items
				static
				className="absolute right-0 mt-2 overflow-hidden text-gray-800 bg-white rounded shadow w-max top-full"
			>
				{children}
			</BaseMenu.Items>
		</Transition>
	)
}

export function MenuItem({ children }: { children: React.ReactElement }) {
	const baseClass = `block p-3 w-full leading-none font-medium text-left transition focus:outline-none`
	const activeClass = `bg-green-100 text-green-900`

	return (
		<BaseMenu.Item as={React.Fragment}>
			{({ active }) => (
				<Slot
					element={children}
					className={`${baseClass} ${active ? activeClass : ""}`}
				/>
			)}
		</BaseMenu.Item>
	)
}
