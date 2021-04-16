import { Disclosure } from "@headlessui/react"
import {
	BookmarkIcon,
	LoginIcon,
	LogoutIcon,
	MenuIcon,
	SearchIcon,
} from "@heroicons/react/solid"
import type { ReactElement, ReactNode } from "react"
import { useCallback } from "react"
import { Link, useMatch } from "react-router-dom"
import { useScrollSelector } from "../dom/useScrollSelector"
import Slot from "../react/Slot"
import { clearIconButtonStyle } from "../ui/components"
import Image from "../ui/Image"
import Tooltip from "../ui/Tooltip"
import { useViewerQuery } from "../viewer/queries"
import AppLogoLink from "./AppLogoLink"

export default function AppHeader() {
	const isAtTop = useScrollSelector(useCallback((scroll) => scroll === 0, []))

	return (
		<header
			className={`
        z-10 p-2 fixed inset-x-0 top-0 transition-colors duration-300 shadow backdrop-filter backdrop-blur-sm
        ${isAtTop ? `bg-gray-800` : `bg-black bg-opacity-75`}
      `}
		>
			<Disclosure>
				<div className="flex items-center px-3">
					<Disclosure.Button
						type="button"
						title="Menu"
						className={`${clearIconButtonStyle} -my-1 -ml-1 sm:hidden mr-3`}
					>
						<MenuIcon className="w-6" />
					</Disclosure.Button>
					<AppLogoLink />

					<nav className="items-center hidden ml-4 sm:flex">
						<DesktopNavItems />
					</nav>

					<div className="flex-1" />

					<ViewerStatus />
				</div>

				<Disclosure.Panel className="grid gap-1 mt-2 sm:hidden">
					<DesktopNavItems />
				</Disclosure.Panel>
			</Disclosure>
		</header>
	)
}

function DesktopNavItems() {
	const viewer = useViewerQuery()

	return viewer.data?.Viewer ? (
		<>
			<NavRouterLink to="/watching">
				<BookmarkIcon className="w-5" />
				<span>Watching</span>
			</NavRouterLink>

			<NavRouterLink to="/search">
				<SearchIcon className="w-5" />
				<span>Download Search</span>
			</NavRouterLink>

			<NavItem>
				<a href="/logout">
					<LogoutIcon className="w-5" />
					<span>Log out</span>
				</a>
			</NavItem>
		</>
	) : (
		<NavItem>
			<a href="/login">
				<LoginIcon className="w-5" />
				<span>Log in with AniList</span>
			</a>
		</NavItem>
	)
}

function NavItem({
	active,
	children,
}: {
	active?: boolean
	children: ReactElement
}) {
	const baseStyle = `flex items-center block rounded-lg space-x-2 p-3 font-medium transition leading-none`
	const activeStyle = `text-green-400 bg-black bg-opacity-25`
	const inactiveStyle = `opacity-50 hover:opacity-100`

	return (
		<Slot
			element={children}
			className={`${baseStyle} ${active ? activeStyle : inactiveStyle}`}
		/>
	)
}

function NavRouterLink({ children, to }: { children: ReactNode; to: string }) {
	const match = useMatch(to)
	return (
		<NavItem active={match != null}>
			<Link to={to}>{children}</Link>
		</NavItem>
	)
}

function ViewerStatus() {
	const viewer = useViewerQuery().data?.Viewer

	if (!viewer) {
		return null
	}

	return (
		<Tooltip text={`Logged in as ${viewer.name}`}>
			<Image src={viewer.avatar?.medium} className="w-8 h-8 rounded-full" />
		</Tooltip>
	)
}
