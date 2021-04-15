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
import { useViewerQuery } from "../generated/graphql"
import { clearIconButtonStyle } from "../ui/components"
import Drawer from "../ui/Drawer"
import LoadingSuspense from "../ui/LoadingSuspense"
import AppErrorBoundary from "./AppErrorBoundary"
import AppLogoLink from "./AppLogoLink"
import NavDrawerContent from "./NavDrawerContent"
import NavItem, { NavRouterLink } from "./NavItem"

export default function AppLayout() {
	const isAtTop = useScrollSelector(useCallback((scroll) => scroll === 0, []))

	return (
		<div tw="pt-16 h-screen isolate">
			<header
				tw={`
					z-10
					fixed inset-x-0 top-0
					flex items-center gap-4 px-4
					transition duration-300
					shadow backdrop-blur
					${isAtTop ? `bg-gray-800` : `bg(black opacity-75)`}
				`}
			>
				<div tw="sm:hidden">
					<Drawer
						trigger={
							<button
								type="button"
								title="Menu"
								tw={`${clearIconButtonStyle} -m-1`}
							>
								<MenuIcon tw="w-6" />
							</button>
						}
					>
						<div tw="w-64 p-2">
							<LoadingSuspense>
								<NavDrawerContent />
							</LoadingSuspense>
						</div>
					</Drawer>
				</div>

				<div tw="py-2">
					<AppLogoLink />
				</div>

				<nav tw="hidden sm:grid grid-flow-col gap-3">
					<DesktopNavItems />
				</nav>
			</header>

			<main tw="h-full w-full mx-auto max-w-screen-xl">
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
	const viewer = useViewerQuery(undefined, { suspense: false })

	if (viewer.isLoading) {
		return null
	}

	return viewer.data?.Viewer ? (
		<>
			<NavRouterLink to="/watching">
				<BookmarkIcon tw="w-5" />
				<span>Watching</span>
			</NavRouterLink>

			<NavRouterLink to="/search">
				<SearchIcon tw="w-5" />
				<span>Download Search</span>
			</NavRouterLink>

			<NavItem>
				<a href="/logout">
					<LogoutIcon tw="w-5" />
					<span>Log out</span>
				</a>
			</NavItem>
		</>
	) : (
		<NavItem>
			<a href="/login">
				<LoginIcon tw="w-5" />
				<span>Log in with AniList</span>
			</a>
		</NavItem>
	)
}
