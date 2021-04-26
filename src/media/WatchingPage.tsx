import { sub } from "date-fns"
import { useInfiniteQuery, useQuery } from "react-query"
import { api } from "../api"
import Button from "../dom/Button"
import type {
	MediaFragment,
	RecentlyAiredQuery,
	WatchingMediaFragment,
} from "../generated/graphql"
import { isTruthy } from "../helpers/isTruthy"
import { solidButtonStyle } from "../ui/components"
import FluidGrid from "../ui/FluidGrid"
import PageSectionHeading from "../ui/PageSectionHeading"
import { useViewerQuery } from "../viewer/useViewerQuery"
import { getNextEpisodeAiringDate } from "./getNextEpisodeAiringDate"
import MediaCard from "./MediaCard"
import MediaNextEipsode from "./MediaNextEipsode"
import WatchingMediaAdvanceProgressButton from "./WatchingMediaAdvanceProgressButton"
import WatchingMediaProgress from "./WatchingMediaProgress"
import WeekdaySectionedList from "./WeekdaySectionedList"

export const WATCHING_MEDIA_LIST_QUERY_KEY = "watchingMedia"

export default function WatchingPage() {
	return (
		<div className="grid gap-8">
			<RecentlyAiredList />
			<WatchingList />
		</div>
	)
}

function RecentlyAiredList() {
	const recentlyAiredQuery = useInfiniteQuery({
		queryKey: ["recentlyAired"],

		queryFn: ({ pageParam = 0 }) =>
			api.RecentlyAired({
				startDate: Math.floor(sub(Date.now(), { days: 1 }).valueOf() / 1000),
				endDate: Math.floor(Date.now() / 1000),
				page: pageParam,
			}),

		getNextPageParam: (data: RecentlyAiredQuery) =>
			data.Page?.pageInfo?.hasNextPage
				? (data.Page?.pageInfo.currentPage ?? 0) + 1
				: undefined,
	})

	return (
		<div className="grid gap-3">
			<PageSectionHeading title="Recently Aired" />
			<FluidGrid>
				{recentlyAiredQuery.data?.pages
					.flatMap((page) => page.Page?.airingSchedules)
					.map((airing) => airing?.media?.mediaListEntry)
					.map((item) => item?.media && { ...item, media: item.media })
					.filter(isTruthy)
					.map((mediaListEntry) => (
						<WatchingMediaCard
							key={mediaListEntry.id}
							mediaListEntry={mediaListEntry}
						/>
					))}
			</FluidGrid>
			{recentlyAiredQuery.hasNextPage && (
				<div>
					<Button className={solidButtonStyle}>Load More</Button>
				</div>
			)}
		</div>
	)
}

function WatchingList() {
	const viewer = useViewerQuery({ required: true })
	const viewerId = viewer.data?.Viewer?.id

	const watchedMediaListQuery = useQuery({
		queryKey: [WATCHING_MEDIA_LIST_QUERY_KEY],
		queryFn: () => api.ViewerWatchedMediaList({ userId: viewerId! }),
		enabled: !!viewerId,
	})

	const watchedMediaList =
		watchedMediaListQuery.data?.Page?.mediaList
			// // this weirdness is to make `media` existent in the list items
			?.map((item) => item?.media && { ...item, media: item.media })
			.filter(isTruthy) ?? []

	return (
		<WeekdaySectionedList
			items={watchedMediaList}
			getItemKey={(item) => item.id}
			getItemDate={(item) => getNextEpisodeAiringDate(item.media)}
			renderItem={(watchingMedia) => (
				<WatchingMediaCard mediaListEntry={watchingMedia} />
			)}
		/>
	)
}

function WatchingMediaCard({
	mediaListEntry,
}: {
	mediaListEntry: WatchingMediaFragment & { media: MediaFragment }
}) {
	return (
		<MediaCard media={mediaListEntry.media}>
			<div className="relative pr-6 mt-2 opacity-70">
				<WatchingMediaProgress watchingMedia={mediaListEntry} />
				<MediaNextEipsode media={mediaListEntry.media} />
				<div className="absolute bottom-0 right-0">
					{mediaListEntry.progress == null ? null : (
						<WatchingMediaAdvanceProgressButton
							mediaListEntryId={mediaListEntry.id}
							progress={mediaListEntry.progress}
						/>
					)}
				</div>
			</div>
		</MediaCard>
	)
}
