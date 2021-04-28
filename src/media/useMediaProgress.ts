import { useMutation, useQuery, useQueryClient } from "react-query"
import { api } from "../api"
import type {
	MediaProgressQuery,
	WatchingMediaFragment,
} from "../generated/graphql"

const MEDIA_PROGRESS_KEY = "mediaProgress"

export function useMediaProgress(watchingMedia: WatchingMediaFragment) {
	const progressQuery = useQuery({
		queryKey: [MEDIA_PROGRESS_KEY, watchingMedia.id],
		queryFn: () => api.MediaProgress({ mediaListId: watchingMedia.id }),
		initialData: { MediaList: watchingMedia },
	})

	const progress = progressQuery.data?.MediaList?.progress ?? 0

	const client = useQueryClient()

	const updateProgressMutation = useMutation(api.UpdateMediaListProgress, {
		onSuccess(data) {
			client.setQueryData<MediaProgressQuery>(
				[MEDIA_PROGRESS_KEY, watchingMedia.id],
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
