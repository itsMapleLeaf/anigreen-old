import { useQueryClient } from "react-query"
import {
	MediaProgressQuery,
	useMediaProgressQuery,
	useUpdateMediaListProgressMutation,
	WatchingMediaFragment,
} from "../generated/graphql"

export function useMediaProgress(watchingMedia: WatchingMediaFragment) {
	const progressQuery = useMediaProgressQuery(
		{ mediaListId: watchingMedia.id },
		{ initialData: { MediaList: watchingMedia } },
	)

	const progress = progressQuery.data?.MediaList?.progress ?? 0

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
	}

	return { progress, advanceProgress, updateProgressMutation }
}
