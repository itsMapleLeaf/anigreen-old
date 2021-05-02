import { sub } from "date-fns"
import Button from "../dom/Button"
import {
	MediaFragment,
	RecentlyAiredQuery,
	useRecentlyAiredQuery,
	useViewerQuery,
	useViewerWatchedMediaListQuery,
	WatchingMediaFragment,
} from "../generated/graphql"
import { isTruthy } from "../helpers/isTruthy"
import { useInfiniteGraphQLQuery } from "../network/useInfiniteGraphQLQuery"
import { solidButtonStyle } from "../ui/components"
import FluidGrid from "../ui/FluidGrid"
import PageSection from "../ui/PageSection"
import WeekdaySectionedList from "../ui/WeekdaySectionedList"
import { getNextEpisodeAiringDate } from "./getNextEpisodeAiringDate"
import MediaCard from "./MediaCard"
import MediaNextEipsode from "./MediaNextEipsode"
import WatchingMediaAdvanceProgressButton from "./WatchingMediaAdvanceProgressButton"
import WatchingMediaProgress from "./WatchingMediaProgress"

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
	const recentlyAiredQuery = useInfiniteGraphQLQuery(
		useRecentlyAiredQuery,
		({ pageParam = 0 }) => ({
			startDate: Math.floor(sub(Date.now(), { days: 1 }).valueOf() / 1000),
			endDate: Math.floor(Date.now() / 1000),
			page: pageParam,
		}),
		{
			getNextPageParam: (data: RecentlyAiredQuery) =>
				data.Page?.pageInfo?.hasNextPage
					? (data.Page?.pageInfo.currentPage ?? 0) + 1
					: undefined,
		},
	)

	const recentlyAiredItems =
		recentlyAiredQuery.data?.pages
			.flatMap((page) => page.Page?.airingSchedules)
			.map((airing) => airing?.media?.mediaListEntry)
			.map((item) => item?.media && { ...item, media: item.media })
			.filter(isTruthy) ?? []

	return recentlyAiredItems.length === 0 ? null : (
		<PageSection title="Recently Aired">
			<FluidGrid>
				{recentlyAiredItems.map((mediaListEntry) => (
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
		</PageSection>
	)
}

function WatchingList() {
	const viewer = useViewerQuery()
	const viewerId = viewer.data?.Viewer?.id

	const watchedMediaListQuery = useViewerWatchedMediaListQuery(
		{ userId: viewerId! },
		{ enabled: !!viewerId },
	)

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
							mediaListEntry={mediaListEntry}
						/>
					)}
				</div>
			</div>
		</MediaCard>
	)
}
