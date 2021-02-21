import React, { useCallback, useState } from "react"
import { tw } from "twind"
import { AppLogoLink } from "./app/AppLogoLink"
import { NavDrawerContent } from "./app/NavDrawerContent"
import { useScrollSelector } from "./dom/useScrollSelector"
import { useAnimeListQuery, useViewerQuery } from "./generated/graphql"
import MediaCard from "./media/MediaCard"
import NyaaModal from "./nyaa/NyaaModal"
import { clearIconButtonStyle } from "./ui/components"
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
		<div className={tw`grid h-screen`} style={{ gridTemplateRows: "auto 1fr" }}>
			<header
				className={tw`
					flex items-center space-x-2 px-2
					shadow transition duration-300 backdrop-blur
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

			<div className={tw`overflow-y-auto`}>
				<main className={tw`mx-auto max-w-screen-md px-2 relative`}>
					{animeListQuery.data?.MediaListCollection?.lists?.map((list) => (
						<div
							key={list?.name}
							className={tw`grid gap-4 py-4 sm:grid-cols-2`}
						>
							{list?.entries?.map((entry) =>
								entry ? (
									<MediaCard
										key={entry.id}
										entry={entry}
										onSearch={setSearchQuery}
									/>
								) : null,
							)}
						</div>
					))}
					{animeListQuery.isLoading && <p>Loading...</p>}
					{animeListQuery.isError && <p>An error occured :(</p>}
					<NyaaModal
						query={searchQuery}
						onClose={() => setSearchQuery(undefined)}
					/>
				</main>
			</div>
		</div>
	)
}

function MenuButton({ onClick }: { onClick?: () => void }) {
	return (
		<button
			type="button"
			title="Menu"
			className={tw(clearIconButtonStyle)}
			onClick={onClick}
		>
			<MenuIcon className={tw`w-6`} />
		</button>
	)
}
