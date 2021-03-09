import { compact } from "lodash-es"
import { useAnimeListQuery, useViewerQuery } from "../generated/graphql"
import SectionedMediaCardList from "../media/SectionedMediaCardList"
import QueryRenderer from "../ui/QueryRenderer"

export default function WatchingPage() {
	const viewerId = useViewerQuery().data?.Viewer?.id

	const animeListQuery = useAnimeListQuery(
		{ userId: viewerId! },
		{ enabled: !!viewerId },
	)

	return (
		<QueryRenderer
			{...animeListQuery}
			renderData={(data) => (
				<SectionedMediaCardList
					entries={compact(
						data?.MediaListCollection?.lists?.flatMap((list) => list?.entries),
					)}
				/>
			)}
		/>
	)
}
