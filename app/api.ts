import type { Request } from "node-fetch"
import { parseSession } from "./components/session"

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
    async fetch(query: string, variables?: object) {
      const response = await fetch(`https://graphql.anilist.co`, {
        method: "POST",
        headers,
        body: JSON.stringify({ query, variables }),
      })

      const data = await response.json()

      return { response, data }
    },
  }
}
