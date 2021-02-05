import { QueryKey, useQuery, UseQueryOptions } from "react-query"
import { GqlString } from "./gql"

class AnilistError extends Error {
	errors

	constructor(
		status: number,
		errors: readonly { status: number; message: string }[],
	) {
		super(`Api request failed with status ${status}`)
		this.errors = errors
	}
}

export function useAnilistQuery<Data, Variables = { [key: string]: unknown }>({
	queryKey,
	query,
	variables,
}: {
	queryKey: QueryKey
	query: GqlString
	variables?: Variables
} & UseQueryOptions<Data, unknown, Variables>) {
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
	})
}
