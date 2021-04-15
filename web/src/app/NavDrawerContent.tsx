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
		<nav tw="space-y-2">
			{viewer.data?.Viewer ? (
				<>
					<NavDrawerHeader />

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
				<>
					<NavItem>
						<a href="/login">
							<LoginIcon tw="w-5" />
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
			<div tw="relative px-2 py-4 flex items-center box-content">
				<Image src={viewer?.avatar?.large} tw="w-10 h-10 shadow rounded-full" />
				<p aria-label="Username" tw="text-lg font-light tracking-wide ml-3">
					{viewer?.name}
				</p>
			</div>
		</div>
	)
}
