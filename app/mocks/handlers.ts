import { graphql } from "msw"
import type { ScheduleQuery, ScheduleQueryVariables } from "../graphql"

export const handlers = [
  graphql.query<ScheduleQuery, ScheduleQueryVariables>(
    "Schedule",
    (req, res, ctx) => {
      return res(
        ctx.data({
          Page: {
            airingSchedules: [],
            pageInfo: {
              currentPage: 1,
              hasNextPage: false,
            },
          },
        }),
      )
    },
  ),
]
