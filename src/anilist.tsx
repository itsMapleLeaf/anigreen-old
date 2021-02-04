import { QueryKey, useQuery } from "react-query"

async function anilistQuery(query: string, variables?: object) {
	const response = await fetch(`https://graphql.anilist.co`, {
		method: "post",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify({ query, variables }),
	})
	return response.json()
}

export function useAnilistQuery<Data>({
	queryKey,
	query,
	variables,
}: {
	queryKey: QueryKey
	query: string
	variables?: object
}) {
	return useQuery<Data>({
		queryKey: [queryKey, variables],
		queryFn: () => anilistQuery(query, variables),
	})
}
