import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid"
import { startOfToday } from "date-fns"
import { useEffect } from "react"
import { Link, useLocation, useSearchParams } from "react-router-dom"
import { createClient } from "../api"
import { Duration } from "../components/helpers/duration"
import { isTruthy } from "../components/helpers/isTruthy"
import { range } from "../components/helpers/range"
import { getAiringDate } from "../components/media/getAiringDate"
import MediaCard from "../components/media/MediaCard"
import MediaCardAiringInfo from "../components/media/MediaCardAiringInfo"
import WeekdaySectionedList from "../components/ui/WeekdaySectionedList"
import { ScheduleDocument } from "../graphql"
import { LoaderArgs, useRouteDataTyped } from "../loader"

export function loader({ request }: LoaderArgs) {
  const client = createClient(request)
  const page = Number(new URL(request.url).searchParams.get("page")) || 1

  return client.fetch({
    query: ScheduleDocument,
    variables: {
      page,
      startDate: Math.floor(startOfToday().valueOf() / 1000),
    },
  })
}

export function headers() {
  return { "Cache-Control": `max-age=${Duration.days(1).asSeconds}` }
}

export default function Schedule() {
  const { data } = useRouteDataTyped<typeof loader>()
  const [params] = useSearchParams()
  const page = Number(params.get("page")) || 1

  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [location.key])

  const airings =
    data?.Page?.airingSchedules
      ?.map((airing) => airing?.media && { ...airing, media: airing.media })
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

      <Pagination page={page} />
    </>
  )
}

function Pagination({ page: currentPage }: { page: number }) {
  const start = Math.max(currentPage - 2, 1)
  const end = start + 5

  return (
    <nav
      aria-label="Pagination"
      className="flex flex-wrap items-center justify-center gap-2 mt-8"
    >
      {currentPage >= 2 && (
        <Link
          to={`/schedule?page=${currentPage - 1}`}
          className="clear-button"
          title="Previous Page"
        >
          <ChevronLeftIcon className="w-5" />
        </Link>
      )}

      {range(start, end).map((page) => (
        <Link
          key={page}
          to={`/schedule?page=${page}`}
          className={
            "clear-button " +
            (page === currentPage
              ? `bg-black bg-opacity-20 text-green-400 opacity-100`
              : ``)
          }
        >
          {page}
        </Link>
      ))}

      <Link
        to={`/schedule?page=${currentPage + 1}`}
        className="clear-button"
        title="Next Page"
      >
        <ChevronRightIcon className="w-5" />
      </Link>
    </nav>
  )
}
