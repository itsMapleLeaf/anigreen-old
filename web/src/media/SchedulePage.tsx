import { startOfWeek } from "date-fns"
import { compact } from "lodash-es"
import { useQuery } from "react-query"
import { api } from "../api"
import { MediaSeason } from "../generated/graphql"
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

	console.log(startOfWeek(Date.now()))

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

function getCurrentMediaSeason() {
	const month = new Date().getMonth()
	if (month === 11 || month <= 1) return MediaSeason.Winter
	if (month <= 4) return MediaSeason.Spring
	if (month <= 7) return MediaSeason.Summer
	return MediaSeason.Fall
}
