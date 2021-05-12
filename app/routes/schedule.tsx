import { startOfToday } from "date-fns"
import { createClient } from "../api"
import { gql } from "../gql"
import type { ScheduleQuery, ScheduleQueryVariables } from "../graphql"
import { LoaderContext, useRouteDataTyped } from "../loader"

export function loader({ request }: LoaderContext) {
  const client = createClient(request)

  return client.fetch<ScheduleQuery, ScheduleQueryVariables>({
    query: gql`
      query Schedule($startDate: Int!) {
        Page {
          airingSchedules(airingAt_greater: $startDate, sort: TIME) {
            id
            episode
            airingAt
            media {
              id
              format
              episodes
              nextAiringEpisode {
                airingAt
                episode
              }
              bannerImage
              title {
                english
                romaji
                native
                userPreferred
              }
              coverImage {
                medium
                large
                extraLarge
                color
              }
              externalLinks {
                id
                url
                site
              }
              isAdult
              isLicensed
              countryOfOrigin
              format
              siteUrl
              mediaListEntry {
                status
              }
            }
          }
          pageInfo {
            currentPage
            hasNextPage
          }
        }
      }
    `,
    variables: {
      startDate: Math.floor(startOfToday().valueOf() / 1000),
    },
  })
}

export default function Schedule() {
  const { data } = useRouteDataTyped<typeof loader>()
  return <pre className="overflow-x-auto">{JSON.stringify(data, null, 2)}</pre>
}
