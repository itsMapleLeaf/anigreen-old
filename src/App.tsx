import React, { useCallback } from "react"
import { tw } from "twind"
import { AppLogoLink } from "./app/AppLogoLink"
import { NavDrawerContent } from "./app/NavDrawerContent"
import { useScrollSelector } from "./dom/useScrollSelector"
import { useAnimeListQuery, useViewerQuery } from "./generated/graphql"
import MediaCard from "./media/MediaCard"
import Drawer from "./ui/Drawer"
import { MenuIcon } from "./ui/icons"

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
					<NavDrawerContent />
				</Drawer>

				<div className={tw`py-2`}>
					<AppLogoLink />
				</div>
			</header>

			<main className={tw`mx-auto max-w-screen-md px-2`}>
				{animeListQuery.data?.MediaListCollection?.lists?.map((list) => (
					<div key={list?.name}>
						<h2 className={tw`font-light text-3xl py-2 z-10`}>{list?.name}</h2>
						<div className={tw`grid gap-4 py-4`}>
							{list?.entries?.map((entry) => (
								<MediaCard key={entry?.id} entry={entry} />
							))}
						</div>
					</div>
				))}

				{animeListQuery.isLoading && <p>Loading...</p>}

				{animeListQuery.isError && <p>An error occured :(</p>}
			</main>
		</>
	)
}

function MenuButton({ onClick }: { onClick?: () => void }) {
	return (
		<button type="button" title="Menu" className={tw`p-3`} onClick={onClick}>
			<MenuIcon />
		</button>
	)
}

function formatNextEpisode(episode?: number, airingTimeSeconds?: number) {
	if (episode && airingTimeSeconds) {
		const date = new Date(Number(airingTimeSeconds) * 1000)
		const dateString = date.toLocaleDateString()
		const timeString = date.toLocaleTimeString(undefined, {
			// @ts-expect-error
			timeStyle: "short",
		})
		return `Episode ${episode} airs on ${dateString} at ${timeString}`
	}
}

function formatProgress(progress?: number, episodes?: number) {
	progress ??= 0
	if (progress === episodes) return "Complete"
	if (episodes == null) return `${progress}`
	return `${progress}/${episodes}`
}

function formatScore(score?: number) {
	if (score != null && score > 0) return `${Math.round(score)}/10`
	return "None"
}
