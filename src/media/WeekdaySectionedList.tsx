import { startOfDay } from "date-fns"
import { Fragment, Key, ReactNode } from "react"
import type { Dict } from "../helpers/types"
import FluidGrid from "../ui/FluidGrid"

export default function WeekdaySectionedList<T>({
	items,
	getItemKey,
	getItemDate,
	renderItem,
}: {
	items: T[]
	getItemKey: (item: T) => Key
	getItemDate: (item: T) => Date | undefined
	renderItem: (item: T, date?: Date) => ReactNode
}) {
	const itemsByDay: Dict<T[]> = {}
	const unairedItems: T[] = []

	for (const item of items) {
		const date = getItemDate(item)
		if (date) {
			const day = startOfDay(date)
			;(itemsByDay[day.valueOf()] ??= []).push(item)
		} else {
			unairedItems.push(item)
		}
	}

	const dayLists = Object.entries(itemsByDay)
		.map(([timestamp, items]) => ({
			date: new Date(Number(timestamp)),
			items,
		}))
		.sort((a, b) => a.date.valueOf() - b.date.valueOf())

	return (
		<div className="grid gap-8">
			{dayLists.map(({ date, items }) => (
				<div key={date.valueOf()} className="grid gap-3">
					<SectionHeading
						title={formatAsWeekday(date)}
						subtitle={formatAsDate(date)}
					/>
					<FluidGrid>
						{items.map((item) => (
							<Fragment key={getItemKey(item)}>
								{renderItem(item, getItemDate(item))}
							</Fragment>
						))}
					</FluidGrid>
				</div>
			))}

			{unairedItems.length ? (
				<div className="grid gap-3">
					<SectionHeading title="Not Airing" />
					<FluidGrid>
						{unairedItems.map((item) => (
							<Fragment key={getItemKey(item)}>{renderItem(item)}</Fragment>
						))}
					</FluidGrid>
				</div>
			) : null}
		</div>
	)
}

function SectionHeading({
	title,
	subtitle,
}: {
	title: ReactNode
	subtitle?: ReactNode
}) {
	return (
		<div>
			<h2 className="text-3xl font-condensed">{title}</h2>
			<p className="text-sm opacity-75">{subtitle}</p>
		</div>
	)
}

function formatAsWeekday(date: Date) {
	return date.toLocaleString(undefined, { weekday: "long" })
}

function formatAsDate(date: Date): string {
	return date.toLocaleString(undefined, {
		month: "long",
		day: "numeric",
		year: "numeric",
	})
}
