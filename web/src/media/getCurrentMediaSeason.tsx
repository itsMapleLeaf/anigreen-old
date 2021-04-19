import { MediaSeason } from "../graphql"

export function getCurrentMediaSeason() {
	const month = new Date().getMonth()
	if (month === 11 || month <= 1) return MediaSeason.WINTER
	if (month <= 4) return MediaSeason.SPRING
	if (month <= 7) return MediaSeason.SUMMER
	return MediaSeason.FALL
}
