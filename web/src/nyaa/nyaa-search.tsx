import type { ReactElement } from "react"
import { Link, useSearchParams } from "react-router-dom"
import LoadingPlaceholder from "../ui/LoadingPlaceholder"

export function NyaaSearchPage() {
	const [params] = useSearchParams()
	const query = params.get("query")

	const url = new URL(`https://nyaa.si/?f=1&c=1_2`)
	if (query) {
		url.searchParams.set("q", query)
	}

	return (
		<div className="relative grid w-full h-full p-4 place-items-center">
			<LoadingPlaceholder />
			<div className="absolute overflow-hidden rounded-lg shadow inset-4">
				<iframe
					title="Nyaa Search"
					src={url.toString()}
					width="100%"
					height="100%"
					frameBorder="0"
				/>
			</div>
		</div>
	)
}

export function NyaaSearchLink({
	children,
	className,
	query,
}: {
	children: ReactElement
	className?: string
	query: string
}) {
	return (
		<Link to={`/search?query=${query}`} className={className}>
			{children}
		</Link>
	)
}
