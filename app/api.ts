import { fetch, Request } from "@remix-run/node"
import { parseSession } from "./components/session"
import type { TypedResponse } from "./typed-response"

type NoVariables = { [key: string]: never }

type FetchOptions<Variables> = Variables extends NoVariables
  ? { query: string }
  : { query: string; variables: Variables }

export function createClient(request: Request) {
  const session = parseSession(request.headers.get("cookie"))

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "Accept": "application/json",
  }

  if (session?.accessToken) {
    headers.Authorization = `Bearer ${session.accessToken}`
  }

  return {
    async fetch<Data, Variables = NoVariables>(
      options: FetchOptions<Variables>
    ): Promise<TypedResponse<{ data?: Data }>> {
      return fetch(`https://graphql.anilist.co/`, {
        method: "POST",
        headers,
        body: JSON.stringify(options),
      })
    },
  }
}
