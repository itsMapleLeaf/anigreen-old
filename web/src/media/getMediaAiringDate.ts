import type { MediaFragment } from "../generated/graphql"

export function getMediaAiringDate(media: MediaFragment) {
	const airingDateSeconds = media.nextAiringEpisode?.airingAt
	return airingDateSeconds ? new Date(airingDateSeconds * 1000) : undefined
}
