import { MediaSeason } from "../../graphql"

export function getCurrentMediaSeason() {
  const month = new Date().getMonth()
  if (month === 11 || month <= 1) return MediaSeason.Winter
  if (month <= 4) return MediaSeason.Spring
  if (month <= 7) return MediaSeason.Summer
  return MediaSeason.Fall
}
