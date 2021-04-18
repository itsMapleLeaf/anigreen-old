import { Menu as BaseMenu, Portal, Transition } from "@headlessui/react"
import * as React from "react"
import Slot from "../react/Slot"
import { createPopperContext } from "./popper"

const OpenContext = React.createContext(false)
const MenuPopper = createPopperContext()

export function Menu({ children }: { children: React.ReactNode }) {
	return (
		<BaseMenu>
			{({ open }) => (
				<OpenContext.Provider value={open}>
					<MenuPopper.Root>
						<div className="relative">{children}</div>
					</MenuPopper.Root>
				</OpenContext.Provider>
			)}
		</BaseMenu>
	)
}

export function MenuButton({ children }: { children: React.ReactElement }) {
	return (
		<MenuPopper.Reference>
			<BaseMenu.Button as={React.Fragment}>{children}</BaseMenu.Button>
		</MenuPopper.Reference>
	)
}

export function MenuPanel({ children }: { children: React.ReactNode }) {
	const open = React.useContext(OpenContext)
	return (
		<Transition.Root show={open}>
			<Portal>
				<MenuPopper.Element>
					<Transition.Child
						as={React.Fragment}
						enter="transition duration-100"
						enterFrom="transform scale-95 opacity-0"
						enterTo="transform scale-100 opacity-100"
						leave="transition duration-100"
						leaveFrom="transform scale-100 opacity-100"
						leaveTo="transform scale-95 opacity-0"
					>
						<BaseMenu.Items
							static
							className="text-gray-800 bg-white rounded shadow min-w-[10rem] overflow-hidden"
						>
							{children}
						</BaseMenu.Items>
					</Transition.Child>
				</MenuPopper.Element>
			</Portal>
		</Transition.Root>
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
