import { tw } from "twind"
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
	if (airingAt && episode) {
		return (
			<Tooltip text={formatNextEpisodeExactDate(airingAt)}>
				<p>
					{formatNextEpisodeRelativeDate(episode, airingAt)}{" "}
					<InfoIcon
						className={tw`inline-block opacity-50`}
						style={{ verticalAlign: "text-top" }}
					/>
				</p>
			</Tooltip>
		)
	}
	return null
}

function formatNextEpisodeRelativeDate(
	episode?: number,
	airingTimeSeconds?: number,
) {
	if (episode && airingTimeSeconds) {
		return `Episode ${episode} airs ${relativeTime(airingTimeSeconds * 1000)}`
	}
}

function formatNextEpisodeExactDate(airingTimeSeconds: number) {
	return new Date(airingTimeSeconds * 1000).toLocaleString(undefined, {
		weekday: "long",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
	})
}
