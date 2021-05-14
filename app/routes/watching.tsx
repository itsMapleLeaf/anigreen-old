import { sub } from "date-fns"
import { createClient } from "../api"
import LoginRequiredMessage from "../components/app/LoginRequiredMessage"
import { isTruthy } from "../components/helpers/isTruthy"
import { getNextEpisodeAiringDate } from "../components/media/getNextEpisodeAiringDate"
import MediaCard from "../components/media/MediaCard"
import MediaNextEipsode from "../components/media/MediaNextEipsode"
import WatchingMediaAdvanceProgressButton from "../components/media/WatchingMediaAdvanceProgressButton"
import WatchingMediaProgress from "../components/media/WatchingMediaProgress"
import FluidGrid from "../components/ui/FluidGrid"
import PageSection from "../components/ui/PageSection"
import WeekdaySectionedList from "../components/ui/WeekdaySectionedList"
import {
  MediaFragment,
  MediaListStatus,
  ViewerDocument,
  WatchingDocument,
  WatchingMediaFragment,
} from "../graphql"
import { LoaderArgs, useRouteDataTyped } from "../loader"
import { json } from "../typed-response"

export async function loader({ request }: LoaderArgs) {
  const client = createClient(request)

  const viewer = await client
    .fetch({ query: ViewerDocument })
    .then((res) => res.json())

  const viewerId = viewer.data?.Viewer?.id

  if (!viewerId) {
    return json({ data: undefined }, { status: 401 })
  }

  return client.fetch({
    query: WatchingDocument,
    variables: {
      userId: viewerId,
      startDate: Math.floor(sub(Date.now(), { days: 1 }).valueOf() / 1000),
      endDate: Math.floor(Date.now() / 1000),
    },
  })
}

export default function Watching() {
  const { data } = useRouteDataTyped<typeof loader>()

  // this check _probably_ isn't sufficient, but works for now
  if (!data) {
    return <LoginRequiredMessage />
  }

  const recentlyAiredItems =
    data?.AiringSchedulesPage?.airingSchedules
      ?.map(
        (airing) =>
          airing?.media?.mediaListEntry?.status === MediaListStatus.Current &&
          airing.media.mediaListEntry,
      )
      .filter(isTruthy)
      .map((item) => item?.media && { ...item, media: item.media })
      .filter(isTruthy) ?? []

  const watchedMediaList =
    data?.MediaListPage?.mediaList
      // // this weirdness is to make `media` existent in the list items
      ?.map((item) => item?.media && { ...item, media: item.media })
      .filter(isTruthy) ?? []

  return (
    <div className="grid gap-8">
      {recentlyAiredItems.length === 0 ? null : (
        <PageSection title="Recently Aired">
          <FluidGrid>
            {recentlyAiredItems.map((mediaListEntry) => (
              <WatchingMediaCard
                key={mediaListEntry.id}
                mediaListEntry={mediaListEntry}
              />
            ))}
          </FluidGrid>
        </PageSection>
      )}

      <WeekdaySectionedList
        items={watchedMediaList}
        getItemKey={(item) => item.id}
        getItemDate={(item) => getNextEpisodeAiringDate(item.media)}
        renderItem={(watchingMedia) => (
          <WatchingMediaCard mediaListEntry={watchingMedia} />
        )}
      />
    </div>
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
