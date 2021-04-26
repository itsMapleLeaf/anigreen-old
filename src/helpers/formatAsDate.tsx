export function formatAsDate(date: Date): string {
	return date.toLocaleString(undefined, {
		month: "long",
		day: "numeric",
		year: "numeric",
	})
}
