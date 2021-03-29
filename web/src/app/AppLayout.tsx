import { MenuIcon } from "@heroicons/react/solid"
import React, { useCallback } from "react"
import { Outlet } from "react-router-dom"
import { useScrollSelector } from "../dom/useScrollSelector"
import { clearIconButtonStyle } from "../ui/components"
import Drawer from "../ui/Drawer"
import AppLogoLink from "./AppLogoLink"
import NavDrawerContent from "./NavDrawerContent"

export default function AppLayout() {
	const isAtTop = useScrollSelector(useCallback((scroll) => scroll === 0, []))

	return (
		<div tw="pt-16 h-screen isolate">
			<header
				tw={`
					z-10
					fixed inset-x-0 top-0
					h-16
					flex items-center space-x-2 px-2
					transition duration-300
					shadow backdrop-blur
					${isAtTop ? `bg-gray-800` : `bg(black opacity-75)`}
				`}
			>
				<Drawer
					trigger={
						<button type="button" title="Menu" tw={clearIconButtonStyle}>
							<MenuIcon tw="w-6" />
						</button>
					}
				>
					<NavDrawerContent />
				</Drawer>

				<div tw="py-2">
					<AppLogoLink />
				</div>
			</header>

			<main tw="h-full w-full mx-auto max-w-screen-xl">
				<Outlet />
			</main>
		</div>
	)
}
