import { Menu } from "@headlessui/react"
import { Fragment, ReactNode } from "react"
import { apply, tw } from "twind"
import { FlipFadeTransition } from "./FlipFadeTransition"

// this is probably inflexible but screw it
type AppMenuOption = {
	label: string
	icon: ReactNode
	onClick: () => void
}

export function AppMenu(props: {
	button: ReactNode
	options: AppMenuOption[]
}) {
	return (
		<Menu>
			{({ open }) => (
				<div className={tw`relative`}>
					<Menu.Button as={Fragment}>{props.button}</Menu.Button>
					<FlipFadeTransition show={open}>
						<Menu.Items static className={tw(menuPanelStyle)}>
							{props.options.map((opt, index) => (
								<Menu.Item key={index}>
									{({ active }) => (
										<button
											type="button"
											className={tw(
												menuItemStyle,
												active && menuItemActiveStyle,
											)}
											onClick={opt.onClick}
										>
											<span className={tw`absolute left-2 self-center`}>
												{opt.icon}
											</span>
											{opt.label}
										</button>
									)}
								</Menu.Item>
							))}
						</Menu.Items>
					</FlipFadeTransition>
				</div>
			)}
		</Menu>
	)
}

const menuPanelStyle = apply`
	absolute top-full mt-2 right-0
	bg-white text-gray-800
	w-max
	rounded
	overflow-hidden
	shadow
`

const menuItemStyle = apply`
	p-3 pl-9
	leading-none font-medium text-left
	transition
	flex
	ring(2 inset transparent)
`

const menuItemActiveStyle = apply`bg-green-100 text-green-900`
