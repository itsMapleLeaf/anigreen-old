import { LogoutIcon, UserCircleIcon } from "@heroicons/react/solid"
import { ErrorBoundary, FallbackProps } from "react-error-boundary"
import ExternalLink from "../dom/ExternalLink"
import { useViewerQuery } from "../generated/graphql"
import { isAuthError } from "../helpers/isAuthError"
import IconWithText from "../ui/IconWithText"
import Image from "../ui/Image"
import { Menu, MenuButton, MenuItem, MenuPanel } from "../ui/menu"

export default function ViewerMenu() {
	return (
		<ErrorBoundary FallbackComponent={ViewerMenuFallback}>
			<ViewerMenuLoggedIn />
		</ErrorBoundary>
	)
}

function ViewerMenuLoggedIn() {
	const viewer = useViewerQuery().data?.Viewer
	if (!viewer) return null

	return (
		<Menu>
			<MenuButton>
				<span className="sr-only">User Actions</span>
				<Image
					src={viewer.avatar?.medium}
					alt="Your avatar"
					className="w-8 h-8 rounded-full"
				/>
			</MenuButton>
			<MenuPanel>
				<ExternalLink
					href={viewer.siteUrl || `https://anilist.co/user/${viewer.id}`}
					className="relative z-0 block w-48 p-3 overflow-hidden text-sm text-white"
				>
					<Image
						src={viewer.bannerImage}
						className="absolute inset-0 w-full h-full rounded-t"
					/>
					<span className="absolute inset-0 bg-black bg-opacity-50 rounded-t" />
					<span className="relative">
						<IconWithText iconLeft={<UserCircleIcon className="w-5" />}>
							<p>{viewer.name}</p>
							<p className="text-xs leading-none opacity-90">
								View profile on AniList
							</p>
						</IconWithText>
					</span>
				</ExternalLink>
				<MenuItem as="a" href="/logout">
					<IconWithText
						text="Log out"
						iconLeft={<LogoutIcon className="w-5" />}
					/>
				</MenuItem>
			</MenuPanel>
		</Menu>
	)
}

function ViewerMenuFallback({ error }: FallbackProps) {
	if (!isAuthError(error)) throw error

	return (
		<Menu>
			<MenuButton>
				<button type="button">
					<span className="sr-only">User Actions</span>
					<UserCircleIcon className="w-8" />
				</button>
			</MenuButton>
			<MenuPanel>
				<MenuItem>
					<a href="/login">Log in with AniList</a>
				</MenuItem>
			</MenuPanel>
		</Menu>
	)
}
