import { cloneElement, ReactElement, ReactNode, useState } from "react"
import { FocusOn } from "react-focus-on"
import { tw } from "twind"
import Portal from "./Portal"

export default function Drawer(props: {
	trigger: ReactElement
	children: ReactNode
}) {
	const [open, setOpen] = useState(false)
	return (
		<>
			{cloneElement(props.trigger, {
				onClick: (...args: unknown[]) => {
					setOpen((open) => !open)
					props.trigger.props.onClick?.(...args)
				},
			})}
			<Portal>
				<div
					className={tw`
						fixed inset-0
						bg(black opacity-75)
						transition-all duration-300
						z-20
						${open ? `opacity-100 visible` : `opacity-0 invisible`}
					`}
				>
					<FocusOn
						className={tw`
							w-max h-full
							bg-gray-800
							shadow
							transition duration-300
							transform
							${open ? `translate-x-0` : `-translate-x-full`}
						`}
						enabled={open}
						onClickOutside={() => setOpen(false)}
						onEscapeKey={() => setOpen(false)}
					>
						{props.children}
					</FocusOn>
				</div>
			</Portal>
		</>
	)
}
