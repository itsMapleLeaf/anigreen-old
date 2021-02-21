import { selectUnit } from "@formatjs/intl-utils"

const formatter = new Intl.RelativeTimeFormat(undefined, {
	numeric: "auto",
})

export function relativeTime(date: Date | number) {
	const { value, unit } = selectUnit(date)
	return formatter.format(value, unit)
}
