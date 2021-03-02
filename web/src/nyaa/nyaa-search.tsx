import { Slot } from "@radix-ui/react-slot"
import constate from "constate"
import { ReactElement, Ref, useState } from "react"
import { autoRef } from "../react/helpers"
import { Dialog, FullScreenModalDialog } from "../ui/dialog"
import LoadingPlaceholder from "../ui/LoadingPlaceholder"

const [NyaaSearchProvider, useNyaaSearchContext] = constate(() => {
	const [query, setQuery] = useState<string>()
	return { query, setQuery }
})

export function NyaaSearchRoot({ children }: { children: ReactElement }) {
	return (
		<NyaaSearchProvider>
			{children}
			<NyaaSearchDialog />
		</NyaaSearchProvider>
	)
}

function NyaaSearchDialog() {
	const { query, setQuery } = useNyaaSearchContext()

	function handleOpenChange(open: boolean) {
		if (!open) {
			setQuery(undefined)
		}
	}

	return (
		<Dialog isOpen={!!query} onOpenChange={handleOpenChange}>
			<FullScreenModalDialog>
				<div tw="relative grid place-items-center h-full">
					<LoadingPlaceholder />
					<iframe
						title="Nyaa Search"
						src={`https://nyaa.si/?f=1&c=1_2&q=${query}`}
						tw="absolute"
						width="100%"
						height="100%"
						frameBorder="0"
					/>
				</div>
			</FullScreenModalDialog>
		</Dialog>
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
	const { setQuery } = useNyaaSearchContext()
	return (
		<Slot
			ref={ref as any}
			// @ts-expect-error
			onClick={(...args) => {
				setQuery(query)
				children.props.onClick?.(...args)
			}}
		>
			{children}
		</Slot>
	)
})
