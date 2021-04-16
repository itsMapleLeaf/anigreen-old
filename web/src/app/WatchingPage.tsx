import { compact } from "lodash-es"
import { useQuery } from "react-query"
import { api } from "../api"
import type { AnimeListQuery } from "../generated/graphql"
import SectionedMediaCardList from "../media/SectionedMediaCardList"
import { useViewerQuery } from "../viewer/queries"

export default function WatchingPage() {
	const viewerQuery = useViewerQuery({ required: true })
	const userId = viewerQuery.data?.Viewer?.id

	const animeListQuery = useQuery({
		queryKey: ["animeList"],
		queryFn() {
			return api.AnimeList({ userId: userId! })
		},
		enabled: !!userId,
		select(data: AnimeListQuery) {
			return compact(
				data?.MediaListCollection?.lists?.flatMap((list) => list?.entries),
			)
		},
	})

	return <SectionedMediaCardList entries={animeListQuery.data ?? []} />
}
