import { QueryOptions } from "react-query"

export type Session = {
	token: string
}

export function createSessionQuery(): QueryOptions<Session | undefined> {
	return {
		queryKey: "session",
		queryFn: async () => {
			const res = await fetch("/session")
			const data = await res.json()
			return data?.session
		},
	}
}
