import type { TypedDocumentNode } from "@graphql-typed-document-node/core"
import { fetch, Request } from "@remix-run/node"
import { print } from "graphql"
import { parseSession } from "./components/session"
import type { TypedResponse } from "./typed-response"

type NoVariables = { [key: string]: never }

type QueryInput<Data, Variables> = string | TypedDocumentNode<Data, Variables>

type FetchOptions<Data, Variables> = Variables extends NoVariables
  ? { query: QueryInput<Data, Variables>; variables?: undefined }
  : { query: QueryInput<Data, Variables>; variables: Variables }

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
    async fetch<Data, Variables>({
      query: input,
      variables,
    }: FetchOptions<Data, Variables>): Promise<TypedResponse<{ data?: Data }>> {
      const query = typeof input === "string" ? input : print(input)
      return fetch(`https://graphql.anilist.co/`, {
        method: "POST",
        headers,
        body: JSON.stringify({ query, variables }),
      })
    },
  }
}
