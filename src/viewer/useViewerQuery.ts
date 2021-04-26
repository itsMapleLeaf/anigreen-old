import { useQuery } from "react-query"
import { api, ApiError } from "../api"

export function useViewerQuery({ required = false } = {}) {
	const query = useQuery({
		queryKey: ["viewer"],
		async queryFn() {
			try {
				return await api.Viewer()
			} catch (error) {
				if (error instanceof ApiError && error.status === 401) {
					return undefined
				}
				throw error
			}
		},
	})

	if (required && !query.data) {
		throw new ApiError("not logged in", 401)
	}

	return query
}
