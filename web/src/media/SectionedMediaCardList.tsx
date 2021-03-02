import { addDays, startOfWeek } from "date-fns"
import { groupBy, sortBy } from "lodash-es"
import type { AnimeListEntryFragment } from "../generated/graphql"
import { mod } from "../helpers/mod"
import MediaCard from "./MediaCard"

export default function SectionedMediaCardList({
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
		<div key={day} tw="grid gap-3">
			<h2 tw="font-condensed text-2xl">
				{Number.isFinite(day) ? getWeekday(day) : "Not Airing"}
			</h2>
			<div
				tw="grid gap-4 items-start"
				style={{ gridTemplateColumns: `repeat(auto-fill, minmax(16rem, 1fr))` }}
			>
				{entries.map((entry) => (
					<MediaCard key={entry.id} entry={entry} />
				))}
			</div>
		</div>
	)) as any
}

function getWeekday(day: number) {
	const date = addDays(startOfWeek(Date.now()), day)
	return date.toLocaleString(undefined, { weekday: "long" })
}
