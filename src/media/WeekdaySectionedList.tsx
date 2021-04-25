import { add, startOfWeek } from "date-fns"
import { range } from "lodash-es"
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
	renderItem: (item: T, date?: Date) => ReactNode
}) {
	const itemsByDay: Record<number, T[]> = {}
	const unairedItems: T[] = []

	for (const item of items) {
		const date = getItemDate(item)
		if (date) {
			const day = date.getDay()
			;(itemsByDay[day] ??= []).push(item)
		} else {
			unairedItems.push(item)
		}
	}

	const currentWeekday = new Date().getDay()

	const weekdaysStartingFromToday = range(0, 7).map(
		(day) => (currentWeekday + day) % 7,
	)

	return (
		<div className="grid gap-8">
			{weekdaysStartingFromToday.map((weekday) => {
				const items = itemsByDay[weekday]
				if (!items?.length) return null

				return (
					<div key={weekday} className="grid gap-3">
						<SectionHeading
							title={formatAsWeekday(dateFromWeekday(weekday))}
							subtitle={formatAsDate(dateFromWeekday(weekday))}
						/>
						<FluidGrid>
							{items.map((item) => (
								<Fragment key={getItemKey(item)}>
									{renderItem(item, getItemDate(item))}
								</Fragment>
							))}
						</FluidGrid>
					</div>
				)
			})}

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

function FluidGrid({ children }: { children: React.ReactNode }) {
	return (
		<div className="grid gap-6 items-start grid-cols-[repeat(auto-fill,minmax(16rem,1fr))]">
			{children}
		</div>
	)
}

function dateFromWeekday(weekday: number): Date {
	return add(startOfWeek(new Date()), { days: weekday })
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
