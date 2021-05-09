import type { ReactNode } from "react"

export default function PageSectionHeading({
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
