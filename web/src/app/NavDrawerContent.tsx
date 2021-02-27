import { Slot } from "@radix-ui/react-slot"
import { forwardRef, ReactElement, Ref } from "react"
import { tw } from "twind"
import { useViewerQuery } from "../generated/graphql"
import { DrawerItem } from "../ui/Drawer"
import { BookmarkIcon, LogoutIcon, PlayIcon, SearchIcon } from "../ui/icons"
import Image from "../ui/Image"

export function NavDrawerContent() {
	const viewerId = useViewerQuery().data?.Viewer?.id

	return (
		<>
			<div className={tw`w-64 space-y-2 p-2`}>
				<nav className={tw`space-y-2`}>
					{viewerId && <NavDrawerHeader />}

					{viewerId ? null : (
						<DrawerItem>
							<NavItem>
								<a href="/login">
									<LogoutIcon />
									<span>Log in with Anilist</span>
								</a>
							</NavItem>
						</DrawerItem>
					)}

					{viewerId ? (
						<DrawerItem>
							<NavItem active>
								<button type="button">
									<BookmarkIcon />
									<span>Watching</span>
								</button>
							</NavItem>
						</DrawerItem>
					) : null}

					<DrawerItem>
						<NavItem>
							<button type="button">
								<PlayIcon />
								<span>Current Season</span>
							</button>
						</NavItem>
					</DrawerItem>

					<DrawerItem>
						<NavItem>
							<button type="button">
								<SearchIcon />
								<span>Search</span>
							</button>
						</NavItem>
					</DrawerItem>

					{viewerId ? (
						<DrawerItem>
							<NavItem>
								<a href="/logout">
									<LogoutIcon />
									<span>Log out</span>
								</a>
							</NavItem>
						</DrawerItem>
					) : null}
				</nav>
			</div>
		</>
	)
}

function NavDrawerHeader() {
	const viewer = useViewerQuery().data?.Viewer

	return (
		<div className={tw`relative overflow-hidden`}>
			<div
				className={tw`absolute inset-0 rounded-lg overflow-hidden bg-gray-900`}
			>
				<Image
					src={viewer?.bannerImage}
					className={tw`w-full h-full object-cover`}
					style={{
						transform: `scale(1.1)`,
						filter: "brightness(30%) blur(2px)",
					}}
				/>
			</div>
			<div
				className={tw`relative px-2 py-4 flex items-center`}
				style={{ boxSizing: "content-box" }}
			>
				<Image
					src={viewer?.avatar?.large}
					className={tw`w-10 h-10 shadow rounded-full`}
				/>
				<p
					aria-label="Username"
					className={tw`text-lg font-light tracking-wide ml-3`}
				>
					{viewer?.name}
				</p>
			</div>
		</div>
	)
}

const NavItem = forwardRef(function NavItem(
	{
		children,
		active,
		...props
	}: {
		children: ReactElement
		active?: boolean
	},
	ref: Ref<unknown>,
) {
	const baseStyle = tw`flex items-center w-full rounded-lg space-x-2 p-2 font-medium transition leading-none`
	const activeStyle = tw`text-green-400 bg(black opacity-25)`
	const inactiveStyle = tw`opacity-50 hactive:(opacity-75 bg(black opacity-25))`

	return (
		<Slot
			className={tw(baseStyle, active ? activeStyle : inactiveStyle)}
			ref={ref}
			{...props}
		>
			{children}
		</Slot>
	)
})
