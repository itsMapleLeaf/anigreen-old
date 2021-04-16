import type { ReactElement, ReactNode } from "react"
import { Link, useMatch } from "react-router-dom"
import Slot from "../react/Slot"

export default function NavItem({
	active,
	children,
}: {
	active?: boolean
	children: ReactElement
}) {
	const baseStyle = `flex items-center w-full rounded-lg space-x-2 p-3 font-medium transition leading-none`
	const activeStyle = `text-green-400 bg-black bg-opacity-25`
	const inactiveStyle = `opacity-50 hover:opacity-100`

	return (
		<Slot
			element={children}
			className={`${baseStyle} ${active ? activeStyle : inactiveStyle}`}
		/>
	)
}

export function NavRouterLink({
	children,
	to,
}: {
	children: ReactNode
	to: string
}) {
	const match = useMatch(to)
	return (
		<NavItem active={match != null}>
			<Link to={to}>{children}</Link>
		</NavItem>
	)
}
