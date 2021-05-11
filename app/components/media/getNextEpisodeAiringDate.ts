import type { MediaFragment } from "../generated/graphql"

/**
 * Returns the exact date the media airs on
 */
export function getNextEpisodeAiringDate(media: MediaFragment) {
	const airingDateSeconds = media.nextAiringEpisode?.airingAt
	return airingDateSeconds == null
		? undefined
		: new Date(airingDateSeconds * 1000)
}
