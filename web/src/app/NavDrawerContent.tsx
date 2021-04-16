import {
	BookmarkIcon,
	LoginIcon,
	LogoutIcon,
	SearchIcon,
} from "@heroicons/react/solid"
import Image from "../ui/Image"
import { useViewerQuery } from "../viewer/queries"
import NavItem, { NavRouterLink } from "./NavItem"

export default function NavDrawerContent() {
	const viewer = useViewerQuery()

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
			<div className="absolute inset-0 overflow-hidden bg-gray-900 rounded-lg">
				<Image
					src={viewer?.bannerImage}
					className="object-cover w-full h-full"
					style={{
						transform: `scale(1.1)`,
						filter: "brightness(30%) blur(2px)",
					}}
				/>
			</div>
			<div className="box-content relative flex items-center px-2 py-4">
				<Image
					src={viewer?.avatar?.large}
					className="w-10 h-10 rounded-full shadow"
				/>
				<p
					aria-label="Username"
					className="ml-3 text-lg font-light tracking-wide"
				>
					{viewer?.name}
				</p>
			</div>
		</div>
	)
}
