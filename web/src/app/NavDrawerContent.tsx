import {
	BookmarkIcon,
	LoginIcon,
	LogoutIcon,
	SearchIcon,
} from "@heroicons/react/solid"
import { useViewerQuery } from "../generated/graphql"
import Image from "../ui/Image"
import LoadingPlaceholder from "../ui/LoadingPlaceholder"
import NavItem, { NavRouterLink } from "./NavItem"

export default function NavDrawerContent() {
	const viewer = useViewerQuery(undefined, { suspense: false })

	if (viewer.isLoading) {
		return <LoadingPlaceholder />
	}

	return (
		<nav className="space-y-2">
			{viewer.data?.Viewer ? (
				<>
					<NavDrawerHeader />

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
				<>
					<NavItem>
						<a href="/login">
							<LoginIcon className="w-5" />
							<span>Log in with AniList</span>
						</a>
					</NavItem>
				</>
			)}
		</nav>
	)
}

function NavDrawerHeader() {
	const viewer = useViewerQuery().data?.Viewer

	return (
		<div className="relative overflow-hidden">
			<div className="absolute inset-0 rounded-lg overflow-hidden bg-gray-900">
				<Image
					src={viewer?.bannerImage}
					className="w-full h-full object-cover"
					style={{
						transform: `scale(1.1)`,
						filter: "brightness(30%) blur(2px)",
					}}
				/>
			</div>
			<div className="relative px-2 py-4 flex items-center box-content">
				<Image
					src={viewer?.avatar?.large}
					className="w-10 h-10 shadow rounded-full"
				/>
				<p
					aria-label="Username"
					className="text-lg font-light tracking-wide ml-3"
				>
					{viewer?.name}
				</p>
			</div>
		</div>
	)
}
