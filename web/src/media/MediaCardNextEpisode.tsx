import { InformationCircleIcon } from "@heroicons/react/solid"
import type { AnimeListEntryFragment } from "../generated/graphql"
import { relativeTime } from "../helpers/relativeTime"
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
			Episode {episode} airs {relativeTime(airingAt * 1000)}{" "}
			<InformationCircleIcon className="inline-block w-5 align-text-top opacity-50" />
		</Tooltip>
	)
}
