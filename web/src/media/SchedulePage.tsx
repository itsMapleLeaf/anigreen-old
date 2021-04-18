import { compact } from "lodash-es"
import { useQuery } from "react-query"
import { api } from "../api"
import { getMediaAiringDate } from "./getMediaAiringDate"
import MediaCard from "./MediaCard"
import WeekdaySectionedList from "./WeekdaySectionedList"

export default function SchedulePage() {
	const scheduleQuery = useQuery({
		queryKey: ["schedule"],
		queryFn: () => {
			return api.Schedule({ todaySeconds: Math.floor(Date.now() / 1000) })
		},
		select: (data) =>
			compact(data.Page?.airingSchedules?.flatMap((item) => item?.media)),
	})

	return (
		<>
			<WeekdaySectionedList
				items={scheduleQuery.data ?? []}
				getItemKey={(item) => item.id}
				getItemDate={getMediaAiringDate}
				renderItem={(media) => <MediaCard media={media} />}
			/>
		</>
	)
}
