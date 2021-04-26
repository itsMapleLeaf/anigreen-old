import { startOfToday } from "date-fns"
import { useInfiniteQuery } from "react-query"
import { api } from "../api"
import type { ScheduleQuery } from "../generated/graphql"
import { isTruthy } from "../helpers/isTruthy"
import InfiniteScrollCursor from "../ui/InfiniteScrollCursor"
import LoadingPlaceholder from "../ui/LoadingPlaceholder"
import WeekdaySectionedList from "../ui/WeekdaySectionedList"
import { getAiringDate } from "./getAiringDate"
import MediaCard from "./MediaCard"
import MediaCardAiringInfo from "./MediaCardAiringInfo"

const SCHEDULE_QUERY_KEY = "schedule"

export default function SchedulePage() {
	const scheduleQuery = useInfiniteQuery({
		queryKey: [SCHEDULE_QUERY_KEY],
		queryFn({ pageParam }) {
			return api.Schedule({
				startDate: Math.floor(startOfToday().valueOf() / 1000),
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

	const airings =
		scheduleQuery.data?.pages
			.flatMap((page) => page.Page?.airingSchedules)
			.map((airing) => airing?.media && { ...airing, media: airing.media })
			.filter(isTruthy)
			.filter(
				({ media }) =>
					!media.isAdult && media.isLicensed && media.countryOfOrigin === "JP",
			) ?? []

	return (
		<>
			<WeekdaySectionedList
				items={airings}
				getItemKey={(airing) => airing.id}
				getItemDate={getAiringDate}
				renderItem={(airing) => (
					<MediaCard media={airing.media}>
						<MediaCardAiringInfo airing={airing} />
					</MediaCard>
				)}
			/>
			<InfiniteScrollCursor onEnterPage={scheduleQuery.fetchNextPage} />
			{scheduleQuery.isFetching && <LoadingPlaceholder />}
		</>
	)
}
