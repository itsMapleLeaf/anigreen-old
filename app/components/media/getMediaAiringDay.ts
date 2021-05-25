import { startOfDay } from "date-fns"
import type { MediaFragment } from "../../graphql"
import { getNextEpisodeAiringDate } from "./getNextEpisodeAiringDate"

/**
 * Returns the start of the day that the media airs on.
 * e.g. If it airs at 5pm on a Sunday, this returns 12:00 midnight on that Sunday
 */
export function getMediaAiringDay(media: MediaFragment) {
  const date = getNextEpisodeAiringDate(media)
  return date ? startOfDay(date) : undefined
}
