import { formatDistanceToNow } from "date-fns"

export function relativeTime(date: Date | number) {
	return formatDistanceToNow(date, { addSuffix: true })
}
