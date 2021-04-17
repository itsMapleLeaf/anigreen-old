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
		queryFn: () => {
			return api.Schedule({ todaySeconds: Math.floor(Date.now() / 1000) })
		},
		enabled: !!userId,
		select: (data) =>
			compact(data.Page?.airingSchedules?.flatMap((item) => item?.media)),
	})

	return (
		<WeekdaySectionedList
			items={scheduleQuery.data ?? []}
			getItemKey={(item) => item.id}
			getItemDate={getMediaAiringDate}
			renderItem={(media) => (
				<div>
					{media.title?.english || media.title?.romaji || media.title?.native}
				</div>
			)}
		/>
	)
}
