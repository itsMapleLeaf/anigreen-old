import { Slot } from "@radix-ui/react-slot"
import type { ReactElement, Ref } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { autoRef } from "../react/helpers"
import LoadingPlaceholder from "../ui/LoadingPlaceholder"

export function NyaaSearchPage() {
	const [params] = useSearchParams()
	const query = params.get("query")

	const url = new URL(`https://nyaa.si/?f=1&c=1_2`)
	if (query) {
		url.searchParams.set("q", query)
	}

	return (
		<div className="relative grid place-items-center w-full h-full p-4">
			<LoadingPlaceholder />
			<div className="absolute inset-4 rounded-lg overflow-hidden shadow">
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

export const NyaaSearchDialogButton = autoRef(function NyaaSearchDialogButton({
	children,
	query,
	ref,
}: {
	children: ReactElement
	query: string
	ref: Ref<unknown>
}) {
	const navigate = useNavigate()
	return (
		<Slot
			ref={ref as any}
			// @ts-expect-error
			onClick={(...args) => {
				navigate(`/search?query=${query}`)
				children.props.onClick?.(...args)
			}}
		>
			{children}
		</Slot>
	)
})
