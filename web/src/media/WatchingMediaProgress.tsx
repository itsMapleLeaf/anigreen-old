import type { MediaList } from "../graphql"

export default function WatchingMediaProgress({
	watchingMedia,
}: {
	watchingMedia: MediaList
}) {
	const progress = watchingMedia.progress ?? 0

	const nextAiringEpisodeNumber =
		watchingMedia.media?.nextAiringEpisode?.episode

	const maxEpisodes = nextAiringEpisodeNumber
		? nextAiringEpisodeNumber - 1
		: watchingMedia.media?.episodes ?? 1

	const progressLagStyle = (() => {
		const progressLag = maxEpisodes - progress
		if (progressLag === 0) return `text-green-400`
		if (progressLag <= 3) return `text-yellow-400`
		return `text-red-400`
	})()

	return (
		<p className={progressLagStyle}>
			{progress}/{maxEpisodes} episodes watched
		</p>
	)
}
