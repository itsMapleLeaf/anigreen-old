import LoginRequiredMessage from "../app/LoginRequiredMessage"
import { MediaListSort, MediaListStatus, MediaType, useQuery } from "../graphql"
import { isTruthy } from "../helpers/isTruthy"
import { getMediaAiringDate } from "./getMediaAiringDate"
import WatchingMediaCard from "./WatchingMediaCard"
import WeekdaySectionedList from "./WeekdaySectionedList"

export const WATCHING_MEDIA_LIST_QUERY_KEY = "watchingMedia"

export default function WatchingPage() {
	const query = useQuery()
	const userId = query.Viewer?.id

	return userId != null ? (
		<WatchingPageAuth userId={userId} />
	) : (
		<LoginRequiredMessage />
	)
}

function WatchingPageAuth({ userId }: { userId: number }) {
	const query = useQuery()

	const watchingMediaList =
		query
			.MediaListCollection({
				userId,
				type: MediaType.ANIME,
				sort: [MediaListSort.STATUS],
				status: MediaListStatus.CURRENT,
			})
			?.lists?.flatMap((list) => list?.entries)
			.filter(isTruthy) ?? []

	return (
		<WeekdaySectionedList
			items={watchingMediaList}
			getItemKey={(item) => item.id ?? 0}
			getItemDate={(item) =>
				item.media ? getMediaAiringDate(item.media) : undefined
			}
			renderItem={(entry) => <WatchingMediaCard watchingMedia={entry} />}
		/>
	)
}
