import { AiringSort, usePaginatedQuery } from "../graphql"
import InfiniteScrollCursor from "../ui/InfiniteScrollCursor"
import LoadingPlaceholder from "../ui/LoadingPlaceholder"
import { getMediaAiringDate } from "./getMediaAiringDate"
import MediaCard from "./MediaCard"
import WeekdaySectionedList from "./WeekdaySectionedList"

const todaySeconds = Math.floor(Date.now() / 1000)

export default function SchedulePage() {
	const { data, fetchMore, isLoading } = usePaginatedQuery(
		(query, args, { getArrayFields }) => {
			const page = query.Page(args)

			const airings = page?.airingSchedules({
				airingAt_greater: todaySeconds,
				sort: [AiringSort.TIME],
			})

			return {
				airings: getArrayFields(airings, "id", "media"),
				hasNextPage: page?.pageInfo?.hasNextPage,
				nextPage: (page?.pageInfo?.currentPage ?? 0) + 1,
			}
		},
		{
			initialArgs: {
				page: 0,
			},
			merge({ data, uniqBy }) {
				if (data.existing) {
					return {
						...data.existing,
						airings: uniqBy(
							[
								...(data.existing.airings ?? []),
								...(data.incoming.airings ?? []),
							],
							(it) => it?.id,
						),
					}
				}
				return data.incoming
			},
		},
	)

	return (
		<>
			<WeekdaySectionedList
				items={data?.airings ?? []}
				getItemKey={(airing) => airing?.id ?? 0}
				getItemDate={(airing) =>
					airing?.media ? getMediaAiringDate(airing.media) : undefined
				}
				renderItem={(airing) =>
					airing?.media && <MediaCard media={airing.media} />
				}
			/>
			<InfiniteScrollCursor
				onEnterPage={() => {
					if (!isLoading && data?.hasNextPage) {
						fetchMore({ page: data.nextPage })
					}
				}}
			/>
			{isLoading && <LoadingPlaceholder />}
		</>
	)
}
