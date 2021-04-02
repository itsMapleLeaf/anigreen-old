import { compact } from "lodash-es"
import { useAnimeListQuery, useViewerQuery } from "../generated/graphql"
import SectionedMediaCardList from "../media/SectionedMediaCardList"
import QueryRenderer from "../ui/QueryRenderer"
import LoginRequiredMessage from "./LoginRequiredMessage"

export default function WatchingPage() {
	const viewerQuery = useViewerQuery()

	const animeListQuery = useAnimeListQuery(
		{ userId: viewerQuery.data?.Viewer?.id! },
		{ enabled: !!viewerQuery.data?.Viewer?.id },
	)

	return (
		<QueryRenderer
			{...viewerQuery}
			errorElement={<LoginRequiredMessage />}
			renderData={() => (
				<QueryRenderer
					{...animeListQuery}
					renderData={(data) => (
						<SectionedMediaCardList
							entries={compact(
								data?.MediaListCollection?.lists?.flatMap(
									(list) => list?.entries,
								),
							)}
						/>
					)}
				/>
			)}
		/>
	)
}
