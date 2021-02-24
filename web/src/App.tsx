import { addDays, startOfWeek } from "date-fns"
import { compact, groupBy, sortBy } from "lodash-es"
import React, { useCallback } from "react"
import { tw } from "twind"
import { AppLogoLink } from "./app/AppLogoLink"
import { NavDrawerContent } from "./app/NavDrawerContent"
import { useScrollSelector } from "./dom/useScrollSelector"
import {
	AnimeListEntryFragment,
	useAnimeListQuery,
	useViewerQuery,
} from "./generated/graphql"
import { mod } from "./helpers/mod"
import MediaCard from "./media/MediaCard"
import { clearIconButtonStyle } from "./ui/components"
import Drawer from "./ui/Drawer"
import { MenuIcon } from "./ui/icons"
import QueryRenderer from "./ui/QueryRenderer"

export default function App() {
	const viewerId = useViewerQuery().data?.Viewer?.id

	const animeListQuery = useAnimeListQuery(
		{ userId: viewerId! },
		{ enabled: !!viewerId },
	)

	const isAtTop = useScrollSelector(useCallback((scroll) => scroll === 0, []))

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
				<main
					className={tw`mx-auto max-w-screen-xl px-2 relative grid gap-8 px-4 py-6`}
				>
					<QueryRenderer
						{...animeListQuery}
						renderData={(data) => {
							const entries = compact(
								data?.MediaListCollection?.lists?.flatMap(
									(list) => list?.entries,
								),
							)

							return <SectionedAnimeList entries={entries} />
						}}
					/>
				</main>
			</div>
		</div>
	)
}

function SectionedAnimeList({
	entries,
}: {
	entries: AnimeListEntryFragment[]
}) {
	const listsByDay = groupBy(entries, (entry) => {
		const airingTimeSeconds = entry?.media?.nextAiringEpisode?.airingAt

		if (airingTimeSeconds) {
			return new Date(airingTimeSeconds * 1000).getDay()
		}

		return Infinity
	})

	const sortedListsByDay = sortBy(
		Object.entries(listsByDay).map(([day, entries]) => ({
			day: Number(day),
			entries,
		})),
		(list) => mod(list.day - 1, 7),
	)

	return sortedListsByDay.map(({ day, entries }) => (
		<div key={day} className={tw`grid gap-3`}>
			<h2 className={tw`font-condensed text-2xl`}>
				{Number.isFinite(day) ? getWeekday(day) : "Not Airing"}
			</h2>
			<div
				className={tw`grid gap-4 items-start`}
				style={{ gridTemplateColumns: `repeat(auto-fill, minmax(16rem, 1fr))` }}
			>
				{entries.map((entry) => (
					<MediaCard key={entry.id} entry={entry} />
				))}
			</div>
		</div>
	)) as any
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

function getWeekday(day: number) {
	const date = addDays(startOfWeek(Date.now()), day)
	return date.toLocaleString(undefined, { weekday: "long" })
}
