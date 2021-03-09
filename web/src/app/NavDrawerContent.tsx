import { Slot } from "@radix-ui/react-slot"
import type { ReactElement, ReactNode } from "react"
import { Link, useMatch } from "react-router-dom"
import { tw } from "twind"
import { useViewerQuery } from "../generated/graphql"
import { DrawerItem } from "../ui/Drawer"
import { BookmarkIcon, LogoutIcon, SearchIcon } from "../ui/icons"
import Image from "../ui/Image"

export default function NavDrawerContent() {
	const viewerId = useViewerQuery().data?.Viewer?.id

	return (
		<>
			<div tw="w-64 space-y-2 p-2">
				<nav tw="space-y-2">
					{viewerId ? (
						<>
							<NavDrawerHeader />

							<NavRouterLink to="/watching">
								<BookmarkIcon />
								<span>Watching</span>
							</NavRouterLink>

							<NavRouterLink to="/search">
								<SearchIcon />
								<span>Download Search</span>
							</NavRouterLink>

							<NavItem>
								<a href="/logout">
									<LogoutIcon />
									<span>Log out</span>
								</a>
							</NavItem>
						</>
					) : (
						<>
							<NavItem>
								<a href="/login">
									<LogoutIcon />
									<span>Log in with Anilist</span>
								</a>
							</NavItem>
						</>
					)}
				</nav>
			</div>
		</>
	)
}

function NavDrawerHeader() {
	const viewer = useViewerQuery().data?.Viewer

	return (
		<div tw="relative overflow-hidden">
			<div tw="absolute inset-0 rounded-lg overflow-hidden bg-gray-900">
				<Image
					src={viewer?.bannerImage}
					tw="w-full h-full object-cover"
					style={{
						transform: `scale(1.1)`,
						filter: "brightness(30%) blur(2px)",
					}}
				/>
			</div>
			<div
				tw="relative px-2 py-4 flex items-center"
				style={{ boxSizing: "content-box" }}
			>
				<Image src={viewer?.avatar?.large} tw="w-10 h-10 shadow rounded-full" />
				<p aria-label="Username" tw="text-lg font-light tracking-wide ml-3">
					{viewer?.name}
				</p>
			</div>
		</div>
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

function NavItem({
	active,
	children,
}: {
	active?: boolean
	children: ReactElement
}) {
	const baseStyle = tw`flex items-center w-full rounded-lg space-x-2 p-2 font-medium transition leading-none`
	const activeStyle = tw`text-green-400 bg(black opacity-25)`
	const inactiveStyle = tw`opacity-50 hactive:(opacity-75 bg(black opacity-25))`

	return (
		<DrawerItem>
			{/* @ts-expect-error */}
			<Slot tw={[baseStyle, active ? activeStyle : inactiveStyle]}>
				{children}
			</Slot>
		</DrawerItem>
	)
}
