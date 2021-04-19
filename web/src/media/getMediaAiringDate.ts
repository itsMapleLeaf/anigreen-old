import type { Media } from "../graphql"

export function getMediaAiringDate(media: Media) {
	const airingDateSeconds = media.nextAiringEpisode?.airingAt
	return airingDateSeconds ? new Date(airingDateSeconds * 1000) : undefined
}
