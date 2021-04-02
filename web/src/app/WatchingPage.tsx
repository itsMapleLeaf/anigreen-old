import { compact } from "lodash-es"
import { useAnimeListQuery, useViewerQuery } from "../generated/graphql"
import SectionedMediaCardList from "../media/SectionedMediaCardList"

export default function WatchingPage() {
	const viewerQuery = useViewerQuery({}, { suspense: true })

	const animeListQuery = useAnimeListQuery(
		{ userId: viewerQuery.data?.Viewer?.id! },
		{
			suspense: true,
			enabled: !!viewerQuery.data?.Viewer?.id,
			select: (data) =>
				compact(
					data?.MediaListCollection?.lists?.flatMap((list) => list?.entries),
				),
		},
	)

	return <SectionedMediaCardList entries={animeListQuery.data ?? []} />
}
