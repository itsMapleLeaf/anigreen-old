import { cloneElement, ReactElement } from "react"
import {
	Dialog,
	DialogBackdrop,
	DialogDisclosure,
	useDialogState,
} from "reakit"
import { tw } from "twind"
import { clearIconButtonStyle } from "../ui/components"
import { CloseIcon } from "../ui/icons"
import LoadingPlaceholder from "../ui/LoadingPlaceholder"

export default function NyaaModal({
	query,
	children,
}: {
	query: string
	children: ReactElement
}) {
	const dialog = useDialogState({
		// animated: 200,
	})

	return (
		<>
			<DialogDisclosure {...dialog}>
				{(disclosureProps) => cloneElement(children, disclosureProps)}
			</DialogDisclosure>
			<DialogBackdrop
				{...dialog}
				className={tw`fixed inset-0 bg-black bg-opacity-75 flex flex-col p-4`}
			>
				<Dialog
					{...dialog}
					className={tw`flex flex-col space-y-4 h-full pointer-events-none`}
					aria-label="Nyaa Search"
				>
					<button
						type="button"
						onClick={() => dialog.hide()}
						className={tw(clearIconButtonStyle, "self-end")}
					>
						<CloseIcon />
					</button>
					<div
						className={tw`flex-1 bg-gray-800 rounded-lg overflow-hidden shadow relative grid place-items-center`}
					>
						<LoadingPlaceholder />
						<iframe
							title="Nyaa Search"
							src={`https://nyaa.si/?f=1&c=1_2&q=${query}`}
							className={tw`absolute`}
							width="100%"
							height="100%"
							frameBorder="0"
						/>
					</div>
				</Dialog>
			</DialogBackdrop>
		</>
	)
}
