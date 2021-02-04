import { QueryKey, useQuery, useQueryClient } from "react-query"
import { createSessionQuery, Session } from "./auth/session"

export function useAnilistQuery<Data>({
	queryKey,
	query,
	variables,
}: {
	queryKey: QueryKey
	query: string
	variables?: object
}) {
	const client = useQueryClient()

	return useQuery<{ data: Data }, unknown, Data>({
		queryKey: [queryKey, variables],
		queryFn: async () => {
			const session = await client.fetchQuery<Session | undefined>(
				createSessionQuery(),
			)

			const response = await fetch(`https://graphql.anilist.co`, {
				method: "post",
				headers: {
					...(session && { Authorization: `Bearer ${session.token}` }),
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					query,
					variables,
				}),
			})

			return response.json()
		},
		select: (response) => response.data,
	})
}
