import "@twind/macro"
import type { AnimeListEntryFragment } from "../generated/graphql"
import { relativeTime } from "../helpers/relativeTime"
import { InfoIcon } from "../ui/icons"
import Tooltip from "../ui/Tooltip"

export default function MediaCardNextEpisode({
	entry,
}: {
	entry: AnimeListEntryFragment
}) {
	const { airingAt, episode } = entry.media?.nextAiringEpisode ?? {}

	if (!(airingAt && episode)) {
		return null
	}

	const nextEpisodeDate = new Date(airingAt * 1000).toLocaleString(undefined, {
		weekday: "long",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
	})

	return (
		<Tooltip text={nextEpisodeDate}>
			<p>
				{`Episode ${episode} airs ${relativeTime(airingAt * 1000)}`}{" "}
				<InfoIcon
					tw="inline-block opacity-50"
					style={{ verticalAlign: "text-top" }}
				/>
			</p>
		</Tooltip>
	)
}
