import { startOfDay } from "date-fns"
import { groupBy, sortBy } from "lodash-es"
import { Fragment, Key, ReactNode } from "react"

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
		const date = getItemDate(item)
		return date ? startOfDay(date).valueOf() : Infinity
	})

	const sortedListsByDay = sortBy(
		Object.entries(listsByDay).map(([day, items]) => ({
			day: Number(day),
			items,
		})),
		(list) => list.day,
	)

	return (
		<div className="grid gap-8">
			{sortedListsByDay.map(({ day, items }) => (
				<div key={day} className="grid gap-3">
					<div>
						<h2 className="text-2xl font-condensed">
							{formatWeekday(day) || "Not Airing"}
						</h2>
						<p className="text-sm opacity-75">{formatDate(day)}</p>
					</div>

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

function formatWeekday(timestamp: number) {
	return (
		Number.isFinite(timestamp) &&
		new Date(timestamp).toLocaleString(undefined, { weekday: "long" })
	)
}

function formatDate(timestamp: number) {
	return (
		Number.isFinite(timestamp) &&
		new Date(timestamp).toLocaleString(undefined, {
			month: "long",
			day: "numeric",
			year: "numeric",
		})
	)
}
