import {
	BookmarkIcon,
	LoginIcon,
	LogoutIcon,
	MenuIcon,
	SearchIcon,
} from "@heroicons/react/solid"
import React, { useCallback } from "react"
import { Outlet } from "react-router-dom"
import { useScrollSelector } from "../dom/useScrollSelector"
import { clearIconButtonStyle } from "../ui/components"
import Drawer from "../ui/Drawer"
import LoadingSuspense from "../ui/LoadingSuspense"
import { useViewerQuery } from "../viewer/queries"
import AppErrorBoundary from "./AppErrorBoundary"
import AppLogoLink from "./AppLogoLink"
import NavDrawerContent from "./NavDrawerContent"
import NavItem, { NavRouterLink } from "./NavItem"

export default function AppLayout() {
	const isAtTop = useScrollSelector(useCallback((scroll) => scroll === 0, []))

	return (
		<div className="h-screen pt-16 isolate">
			<header
				className={`
					z-10
					fixed inset-x-0 top-0
					flex items-center gap-4 px-4
					transition-colors duration-300
					shadow backdrop-filter backdrop-blur-sm
					${isAtTop ? `bg-gray-800` : `bg-black bg-opacity-75`}
				`}
			>
				<div className="sm:hidden">
					<Drawer
						trigger={
							<button
								type="button"
								title="Menu"
								className={`${clearIconButtonStyle} -m-1`}
							>
								<MenuIcon className="w-6" />
							</button>
						}
					>
						<div className="w-64 p-2">
							<LoadingSuspense>
								<NavDrawerContent />
							</LoadingSuspense>
						</div>
					</Drawer>
				</div>

				<div className="py-2">
					<AppLogoLink />
				</div>

				<nav className="hidden grid-flow-col gap-3 sm:grid">
					<DesktopNavItems />
				</nav>
			</header>

			<main className="w-full h-full max-w-screen-xl mx-auto">
				<AppErrorBoundary>
					<LoadingSuspense>
						<Outlet />
					</LoadingSuspense>
				</AppErrorBoundary>
			</main>
		</div>
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
