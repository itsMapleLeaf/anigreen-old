import { compact } from "lodash-es"
import { useQuery } from "react-query"
import { api } from "../api"
import { useViewerQuery } from "../viewer/queries"
import { getMediaAiringDate } from "./getMediaAiringDate"
import WeekdaySectionedList from "./WeekdaySectionedList"

export default function SchedulePage() {
	const viewerQuery = useViewerQuery({ required: true })
	const userId = viewerQuery.data?.Viewer?.id

	const scheduleQuery = useQuery({
		queryKey: ["schedule"],
		queryFn: () => api.Schedule(),
		enabled: !!userId,
		select: (data) => compact(data.Page?.media),
	})

	return (
		<WeekdaySectionedList
			items={scheduleQuery.data ?? []}
			getItemKey={(item) => item.id}
			getItemDate={getMediaAiringDate}
			renderItem={(media) => media.title?.english}
		/>
	)
}
