import { QueryKey, useQuery, UseQueryOptions } from "react-query"
import { GqlString } from "../gql"
import { AnilistError } from "./AnilistError"

export function useAnilistQuery<Data, Variables = { [key: string]: unknown }>({
	queryKey,
	query,
	variables,
	...options
}: {
	queryKey: QueryKey
	query: GqlString
	variables?: Variables
} & UseQueryOptions<Data, unknown>) {
	return useQuery<Data, unknown>({
		queryKey: [queryKey, variables],
		queryFn: async () => {
			const response = await fetch(`/anilist`, {
				method: "post",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					query,
					variables,
				}),
			})

			const json = await response.json()

			if (!response.ok) {
				throw new AnilistError(response.status, json.errors)
			}

			return json.data
		},
		...options,
	})
}
