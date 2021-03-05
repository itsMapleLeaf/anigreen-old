import { apply } from "twind/css"
import type { AnimeListEntryFragment } from "../generated/graphql"

export default function MediaCardProgress({
	entry,
}: {
	entry: AnimeListEntryFragment
}) {
	const progress = entry.progress ?? 0

	const nextAiringEpisodeNumber = entry.media?.nextAiringEpisode?.episode

	const maxEpisodes = nextAiringEpisodeNumber
		? nextAiringEpisodeNumber - 1
		: entry.media?.episodes ?? 1

	const progressLagStyle = (() => {
		const progressLag = maxEpisodes - progress
		if (progressLag === 0) return apply`text-green-400`
		if (progressLag <= 3) return apply`text-yellow-400`
		return apply`text-red-400`
	})()

	return (
		<p tw={progressLagStyle}>
			{progress}/{maxEpisodes} episodes watched
		</p>
	)
}
