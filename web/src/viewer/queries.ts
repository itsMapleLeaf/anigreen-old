import { useQuery } from "react-query"
import { api } from "../api"

export function useViewerQuery({ required = false } = {}) {
	return useQuery({
		queryKey: [required ? "viewer-required" : "viewer-optional"],
		async queryFn() {
			try {
				return await api.Viewer()
			} catch (error) {
				if (required) throw error
				return undefined
			}
		},
	})
}
