import {
	cloneElement,
	createContext,
	ReactElement,
	ReactNode,
	useContext,
	useState,
} from "react"
import { FocusOn } from "react-focus-on"
import { tw } from "twind"
import Portal from "./Portal"

const Context = createContext({
	open: false,
	setOpen(newOpen: boolean) {},
})

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
						<Context.Provider value={{ open, setOpen }}>
							{props.children}
						</Context.Provider>
					</FocusOn>
				</div>
			</Portal>
		</>
	)
}

export function DrawerItem({ children }: { children: ReactElement }) {
	const drawer = useContext(Context)
	return cloneElement(children, {
		onClick: (...args: unknown[]) => {
			children.props.onClick?.(...args)
			drawer.setOpen(false)
		},
	})
}
