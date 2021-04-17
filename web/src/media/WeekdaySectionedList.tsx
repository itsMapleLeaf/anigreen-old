import { addDays, startOfWeek } from "date-fns"
import { groupBy, sortBy } from "lodash-es"
import { Fragment, Key, ReactNode } from "react"
import { mod } from "../helpers/mod"

export default function WeekdaySectionedList<T>({
	items,
	getItemKey,
	getItemDate,
	renderItem,
}: {
	items: T[]
	getItemKey: (item: T) => Key
	getItemDate: (item: T) => Date | undefined
	renderItem: (item: T) => ReactNode
}) {
	const listsByDay = groupBy(items, (item) => {
		return getItemDate(item)?.getDay() ?? Infinity
	})

	const sortedListsByDay = sortBy(
		Object.entries(listsByDay).map(([day, items]) => ({
			day: Number(day),
			items,
		})),
		(list) => mod(list.day - 1, 7),
	)

	return (
		<div className="grid gap-8">
			{sortedListsByDay.map(({ day, items }) => (
				<div key={day} className="grid gap-3">
					<h2 className="text-2xl font-condensed">
						{Number.isFinite(day) ? getWeekday(day) : "Not Airing"}
					</h2>
					<div className="grid gap-4 items-start grid-cols-[repeat(auto-fill,minmax(16rem,1fr))]">
						{items.map((item) => (
							<Fragment key={getItemKey(item)}>{renderItem(item)}</Fragment>
						))}
					</div>
				</div>
			))}
		</div>
	)
}

function getWeekday(day: number) {
	const date = addDays(startOfWeek(Date.now()), day)
	return date.toLocaleString(undefined, { weekday: "long" })
}
