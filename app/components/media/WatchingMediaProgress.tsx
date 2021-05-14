import { WatchingMediaFragment } from "../../graphql"
import { useMediaProgress } from "./useMediaProgress"

export default function WatchingMediaProgress({
  watchingMedia,
}: {
  watchingMedia: WatchingMediaFragment
}) {
  const { progress, maxEpisodes } = useMediaProgress(watchingMedia)

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
