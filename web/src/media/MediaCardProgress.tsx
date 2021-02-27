import { tw } from "twind"
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

	const progressLag = maxEpisodes - progress

	const progressLagStyle =
		progressLag === 0
			? tw`text-green-400`
			: progressLag <= 3
			? tw`text-yellow-400`
			: tw`text-red-400`

	return (
		<p className={progressLagStyle}>
			{progress}/{maxEpisodes} episodes watched
		</p>
	)
}
