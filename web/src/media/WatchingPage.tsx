import { compact } from "lodash-es"
import { useQuery } from "react-query"
import { api } from "../api"
import type { ViewerWatchedMediaListQuery } from "../generated/graphql"
import { useViewerQuery } from "../viewer/queries"
import { getMediaAiringDate } from "./getMediaAiringDate"
import WatchingMediaCard from "./WatchingMediaCard"
import WeekdaySectionedList from "./WeekdaySectionedList"

export default function WatchingPage() {
	const viewerQuery = useViewerQuery({ required: true })
	const userId = viewerQuery.data?.Viewer?.id

	const watchedMediaListQuery = useQuery({
		queryKey: ["watchingMedia", userId],
		queryFn: () => api.ViewerWatchedMediaList({ userId: userId! }),
		enabled: !!userId,
		select(data: ViewerWatchedMediaListQuery) {
			return compact(
				data?.MediaListCollection?.lists?.flatMap((list) => list?.entries),
			)
		},
	})

	return (
		<WeekdaySectionedList
			items={watchedMediaListQuery.data ?? []}
			getItemKey={(item) => item.id}
			getItemDate={(item) => item.media && getMediaAiringDate(item.media)}
			renderItem={(entry) => <WatchingMediaCard watchingMedia={entry} />}
		/>
	)
}
