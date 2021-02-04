import { QueryKey, useQuery } from "react-query"

export function useAnilistQuery<Data>({
	queryKey,
	query,
	variables,
}: {
	queryKey: QueryKey
	query: string
	variables?: object
}) {
	return useQuery<{ data: Data }, unknown, Data>({
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

			return response.json()
		},
		select: (response) => response.data,
	})
}
