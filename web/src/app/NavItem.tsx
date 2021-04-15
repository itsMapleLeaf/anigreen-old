import { Slot } from "@radix-ui/react-slot"
import type { ReactElement, ReactNode } from "react"
import { Link, useMatch } from "react-router-dom"
import { tw } from "twind"

export default function NavItem({
	active,
	children,
}: {
	active?: boolean
	children: ReactElement
}) {
	const baseStyle = tw`flex items-center w-full rounded-lg space-x-2 p-3 font-medium transition leading-none`
	const activeStyle = tw`text-green-400 bg(black opacity-25)`
	const inactiveStyle = tw`opacity-50 hactive:opacity-100`

	return (
		<Slot tw={[baseStyle, active ? activeStyle : inactiveStyle]}>
			{children}
		</Slot>
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
