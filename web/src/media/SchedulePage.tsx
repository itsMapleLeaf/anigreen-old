import { compact } from "lodash-es"
import { useInfiniteQuery } from "react-query"
import { api } from "../api"
import type { ScheduleQuery } from "../generated/graphql"
import InfiniteScrollCursor from "../ui/InfiniteScrollCursor"
import LoadingPlaceholder from "../ui/LoadingPlaceholder"
import { getMediaAiringDate } from "./getMediaAiringDate"
import MediaCard from "./MediaCard"
import WeekdaySectionedList from "./WeekdaySectionedList"

const SCHEDULE_QUERY_KEY = "schedule"

export default function SchedulePage() {
	const scheduleQuery = useInfiniteQuery({
		queryKey: [SCHEDULE_QUERY_KEY],
		queryFn({ pageParam }) {
			return api.Schedule({
				todaySeconds: Math.floor(Date.now() / 1000),
				page: pageParam,
			})
		},
		getNextPageParam(data: ScheduleQuery) {
			const info = data.Page?.pageInfo
			if (info?.hasNextPage) {
				return (info.currentPage ?? 0) + 1
			}
		},
	})

	const airings = compact(
		scheduleQuery.data?.pages
			.flatMap((page) => page.Page?.airingSchedules)
			.map((airing) => airing?.media && { ...airing, media: airing.media }),
	)

	return (
		<>
			<WeekdaySectionedList
				items={airings}
				getItemKey={(airing) => airing.id}
				getItemDate={(airing) => getMediaAiringDate(airing.media)}
				renderItem={(airing) => <MediaCard media={airing.media} />}
			/>
			<InfiniteScrollCursor onEnterPage={scheduleQuery.fetchNextPage} />
			{scheduleQuery.isFetching && <LoadingPlaceholder />}
		</>
	)
}
