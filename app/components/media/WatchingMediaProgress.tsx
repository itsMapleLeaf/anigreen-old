export default function WatchingMediaProgress({
  progress,
  maxEpisodes,
}: {
  progress: number
  maxEpisodes: number
}) {
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
