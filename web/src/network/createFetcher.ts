export function createFetcher<TData, TVariables>(
	query: string,
	variables?: TVariables,
) {
	return async function fetchData(): Promise<TData> {
		const res = await fetch("/anilist", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				query,
				variables,
			}),
		})

		const json = await res.json()

		if (json.errors) {
			throw new FetcherError(json)
		}

		return json.data
	}
}

export class FetcherError extends Error {
	status?: number

	constructor(json: any) {
		const error = json?.errors?.[0]
		super(error?.message || "An unknown error occurred")
		this.status = error?.status
	}
}
