export function formatAsWeekday(date: Date) {
  return date.toLocaleString(undefined, { weekday: "long" })
}
