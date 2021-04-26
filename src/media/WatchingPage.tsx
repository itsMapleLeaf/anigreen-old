import { compact } from "lodash-es"
import { useQuery } from "react-query"
import { api } from "../api"
import type { ViewerWatchedMediaListQuery } from "../generated/graphql"
import { isTruthy } from "../helpers/isTruthy"
import { useViewerQuery } from "../viewer/useViewerQuery"
import { getNextEpisodeAiringDate } from "./getNextEpisodeAiringDate"
import MediaCard from "./MediaCard"
import MediaNextEipsode from "./MediaNextEipsode"
import WatchingMediaAdvanceProgressButton from "./WatchingMediaAdvanceProgressButton"
import WatchingMediaProgress from "./WatchingMediaProgress"
import WeekdaySectionedList from "./WeekdaySectionedList"

export const WATCHING_MEDIA_LIST_QUERY_KEY = "watchingMedia"

export default function WatchingPage() {
	const viewerQuery = useViewerQuery({ required: true })
	const userId = viewerQuery.data?.Viewer?.id

	const watchedMediaListQuery = useQuery({
		queryKey: [WATCHING_MEDIA_LIST_QUERY_KEY, userId],
		queryFn: () => api.ViewerWatchedMediaList({ userId: userId! }),
		enabled: !!userId,
		select(data: ViewerWatchedMediaListQuery) {
			return compact(
				data?.MediaListCollection?.lists?.flatMap((list) => list?.entries),
			)
		},
	})

	const watchedMediaList =
		watchedMediaListQuery.data
			?.map((item) => item.media && { ...item, media: item.media })
			.filter(isTruthy) ?? []

	return (
		<WeekdaySectionedList
			items={watchedMediaList}
			getItemKey={(item) => item.id}
			getItemDate={(item) => getNextEpisodeAiringDate(item.media)}
			renderItem={(watchingMedia) => (
				<MediaCard media={watchingMedia.media}>
					<div className="relative pr-6 mt-2 opacity-70">
						<WatchingMediaProgress watchingMedia={watchingMedia} />
						<MediaNextEipsode media={watchingMedia.media} />
						<div className="absolute bottom-0 right-0">
							<WatchingMediaAdvanceProgressButton entry={watchingMedia} />
						</div>
					</div>
				</MediaCard>
			)}
		/>
	)
}
