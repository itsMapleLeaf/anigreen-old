import { WatchingMediaFragment } from "../../graphql"

export function useMediaProgress(watchingMedia: WatchingMediaFragment) {
  /* const progressQuery = useMediaProgressQuery(
		{ mediaListId: watchingMedia.id },
		{ initialData: { MediaList: watchingMedia } },
	)

	const progress = progressQuery.data?.MediaList?.progress ?? 0

	const nextAiringEpisodeNumber =
		watchingMedia.media?.nextAiringEpisode?.episode

	const maxEpisodes = nextAiringEpisodeNumber
		? nextAiringEpisodeNumber - 1
		: watchingMedia.media?.episodes ?? 1

	const isCaughtUp = progress === maxEpisodes

	const client = useQueryClient()

	const updateProgressMutation = useUpdateMediaListProgressMutation({
		onSuccess(data) {
			client.setQueryData<MediaProgressQuery>(
				useMediaProgressQuery.getKey({
					mediaListId: watchingMedia.id,
				}),
				{ MediaList: data.SaveMediaListEntry },
			)
		},
	})

	function advanceProgress() {
		updateProgressMutation.mutate({
			id: watchingMedia.id,
			progress: (progress ?? 0) + 1,
		})
	} */

  const progress: number = 0
  const advanceProgress = () => {}
  const nextAiringEpisodeNumber = 1
  const maxEpisodes: number = 12
  const isCaughtUp = progress === maxEpisodes

  return {
    progress,
    advanceProgress,
    nextAiringEpisodeNumber,
    maxEpisodes,
    isCaughtUp,
  }
}
