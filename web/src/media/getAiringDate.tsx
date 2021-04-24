import type { AiringFragment } from "../generated/graphql"

export function getAiringDate(airing: AiringFragment) {
	return new Date(airing.airingAt * 1000)
}
