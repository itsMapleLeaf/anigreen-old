export const fetchData = <TData, TVariables>(
	query: string,
	variables?: TVariables,
) => {
	return async (): Promise<TData> => {
		const res = await fetch("/anilist", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				query,
				variables,
			}),
			credentials: "include",
		})

		const json = await res.json()

		if (!res.ok || json.errors) {
			const message = json.errors[0] || res.statusText || "Network error"
			throw new FetchDataError(message, res.status)
		}

		return json.data
	}
}

export class FetchDataError extends Error {
	constructor(message: string, readonly status: number) {
		super(message)
	}
}
