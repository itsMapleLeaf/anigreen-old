import { startOfToday } from "date-fns"
import { createClient } from "../api"
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
  return <pre className="overflow-x-auto">{JSON.stringify(data, null, 2)}</pre>
}
