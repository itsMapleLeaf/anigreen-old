import React, { useCallback, useState } from "react"
import { tw } from "twind"
import { AppLogoLink } from "./app/AppLogoLink"
import { NavDrawerContent } from "./app/NavDrawerContent"
import { useScrollSelector } from "./dom/useScrollSelector"
import { useAnimeListQuery, useViewerQuery } from "./generated/graphql"
import MediaCard from "./media/MediaCard"
import NyaaModal from "./nyaa/NyaaModal"
import Drawer from "./ui/Drawer"
import { MenuIcon } from "./ui/icons"

export default function App() {
	const viewerId = useViewerQuery().data?.Viewer?.id

	const animeListQuery = useAnimeListQuery(
		{ userId: viewerId! },
		{ enabled: !!viewerId },
	)

	const isAtTop = useScrollSelector(useCallback((scroll) => scroll === 0, []))

	const [searchQuery, setSearchQuery] = useState<string>()

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
					<NavDrawerContent />
				</Drawer>

				<div className={tw`py-2`}>
					<AppLogoLink />
				</div>
			</header>

			<main className={tw`mx-auto max-w-screen-md px-2`}>
				{animeListQuery.data?.MediaListCollection?.lists?.map((list) => (
					<div key={list?.name} className={tw`grid gap-4 py-4 sm:grid-cols-2`}>
						{list?.entries?.map((entry) => (
							<MediaCard
								key={entry?.id}
								entry={entry}
								onSearch={setSearchQuery}
							/>
						))}
					</div>
				))}
				{animeListQuery.isLoading && <p>Loading...</p>}
				{animeListQuery.isError && <p>An error occured :(</p>}
				<NyaaModal
					query={searchQuery}
					onClose={() => setSearchQuery(undefined)}
				/>
			</main>
		</>
	)
}

function MenuButton({ onClick }: { onClick?: () => void }) {
	return (
		<button type="button" title="Menu" className={tw`p-3`} onClick={onClick}>
			<MenuIcon className={tw`w-6`} />
		</button>
	)
}
