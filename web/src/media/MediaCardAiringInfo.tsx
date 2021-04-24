import { CalendarIcon, ClockIcon } from "@heroicons/react/solid"
import { capitalize } from "lodash-es"
import type { AiringFragment } from "../generated/graphql"
import { relativeTime } from "../helpers/relativeTime"
import { getAiringDate } from "./getAiringDate"

export default function MediaCardAiringInfo({
	airing,
}: {
	airing: AiringFragment
}) {
	const date = getAiringDate(airing)
	return (
		<div className="text-sm leading-6 opacity-75">
			<p>
				<CalendarIcon className="inline w-5 align-top" /> Episode{" "}
				{airing.episode}
			</p>
			<time dateTime={date.toISOString()}>
				<ClockIcon className="inline w-5 align-top" />{" "}
				{capitalize(relativeTime(date))}
			</time>
		</div>
	)
}
