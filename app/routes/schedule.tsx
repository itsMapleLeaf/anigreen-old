import { startOfToday } from "date-fns"
import { createClient } from "../api"
import { isTruthy } from "../components/helpers/isTruthy"
import { getAiringDate } from "../components/media/getAiringDate"
import MediaCard from "../components/media/MediaCard"
import MediaCardAiringInfo from "../components/media/MediaCardAiringInfo"
import WeekdaySectionedList from "../components/ui/WeekdaySectionedList"
import { ScheduleDocument } from "../graphql"
import { LoaderArgs, useRouteDataTyped } from "../loader"

export function loader({ request }: LoaderArgs) {
  const client = createClient(request)

  return client.fetch({
    query: ScheduleDocument,
    variables: {
      startDate: Math.floor(startOfToday().valueOf() / 1000),
    },
  })
}

export default function Schedule() {
  const { data } = useRouteDataTyped<typeof loader>()

  const airings =
    data?.Page?.airingSchedules
      ?.map((airing) => airing?.media && { ...airing, media: airing.media })
      .filter(isTruthy)
      .filter(
        ({ media }) =>
          !media.isAdult && media.isLicensed && media.countryOfOrigin === "JP",
      ) ?? []

  return (
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
  )
}
