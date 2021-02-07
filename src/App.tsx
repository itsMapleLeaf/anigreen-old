import { compact, uniq } from "lodash-es"
import React, { ReactNode, useCallback } from "react"
import { tw } from "twind"
import AuthButton from "./auth/AuthButton"
import { useScrollSelector } from "./dom/useScrollSelector"
import { useAnimeListQuery, useViewerQuery } from "./generated/graphql"
import Drawer from "./ui/Drawer"
import { BookmarkIcon, MenuIcon, PlayIcon, SearchIcon } from "./ui/icons"
import Image from "./ui/Image"

export default function App() {
	const viewerId = useViewerQuery().data?.Viewer?.id

	const animeListQuery = useAnimeListQuery(
		{ userId: viewerId! },
		{ enabled: !!viewerId },
	)

	const isAtTop = useScrollSelector(useCallback((scroll) => scroll === 0, []))

	return (
		<>
			<header
				className={tw`
					flex items-center
					shadow
					sticky top-0 z-20
					transition duration-300
					backdrop-blur
					${isAtTop ? `bg-gray-800` : `bg(black opacity-75)`}
				`}
			>
				<Drawer trigger={<MenuButton />}>
					<div className={tw`w-64 space-y-2 p-2`}>
						<nav className={tw`space-y-2`}>
							<NavDrawerHeader />
							<NavDrawerLink active>
								<BookmarkIcon />
								<span>Watching</span>
							</NavDrawerLink>
							<NavDrawerLink>
								<PlayIcon />
								<span>Current Season</span>
							</NavDrawerLink>
							<NavDrawerLink>
								<SearchIcon />
								<span>Search</span>
							</NavDrawerLink>
						</nav>
					</div>
				</Drawer>

				<div className={tw`py-2`}>
					<AppLogoLink />
				</div>

				<div className={tw`flex-1`} />

				<div className={tw`px-4`}>
					<AuthButton />
				</div>
			</header>

			<main className={tw`mx-auto max-w-screen-md px-2`}>
				{animeListQuery.data?.MediaListCollection?.lists?.map((list) => (
					<div key={list?.name}>
						<h2 className={tw`font-light text-3xl py-2 z-10`}>{list?.name}</h2>

						<div
							className={tw`grid gap-2 mt-2`}
							style={{
								gridTemplateColumns: `repeat(auto-fill, minmax(12rem, 1fr))`,
							}}
						>
							{list?.entries?.map((entry) => {
								const titles = compact(
									uniq([
										entry?.media?.title?.english,
										entry?.media?.title?.romaji,
									]),
								)

								return (
									<div
										key={entry?.id}
										className={tw`relative shadow`}
										style={{
											backgroundColor:
												entry?.media?.coverImage?.color || undefined,
										}}
									>
										<Image
											className={tw`w-full object-cover`}
											style={{ aspectRatio: "3/4" }}
											src={entry?.media?.coverImage?.large || ""}
										/>
										<div
											className={tw`absolute inset-x-0 bottom-0 bg(black opacity-75) p-2 backdrop-blur`}
										>
											<h3 className={tw`font-light`}>{titles[0]}</h3>
											{titles[1] && (
												<p className={tw`font-light text-sm opacity-75`}>
													{titles[1]}
												</p>
											)}
										</div>
									</div>
								)
							})}
						</div>
					</div>
				))}

				{animeListQuery.isLoading && <p>Loading...</p>}

				{animeListQuery.isError && <p>An error occured :(</p>}
			</main>
		</>
	)
}

function AppLogoLink() {
	return (
		<a href="/" className={tw`space-y-1`}>
			<h1 className={tw`text-3xl leading-none`}>
				<span className={tw`text-blue-300`}>ani</span>
				<span className={tw`text-green-300`}>green</span>
			</h1>
			<p className={tw`text-sm opacity-50`}>name pending</p>
		</a>
	)
}

function MenuButton({ onClick }: { onClick?: () => void }) {
	return (
		<button type="button" title="Menu" className={tw`p-3`} onClick={onClick}>
			<MenuIcon />
		</button>
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
						transform: `scale(1.1)`, // prevents dark corners
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

function NavDrawerLink({
	children,
	active,
}: {
	children: ReactNode
	active?: boolean
}) {
	const baseStyle = tw`flex items-center rounded-lg space-x-1 p-2 font-medium transition leading-none`
	const activeStyle = tw`text-green-400 bg(black opacity-25)`
	const inactiveStyle = tw`opacity-50 hactive:(opacity-75 bg(black opacity-25))`
	return (
		<a
			href="#test"
			className={tw`${baseStyle} ${active ? activeStyle : inactiveStyle}`}
		>
			{children}
		</a>
	)
}
