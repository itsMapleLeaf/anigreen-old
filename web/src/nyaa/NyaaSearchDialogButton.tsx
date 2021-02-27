import type { ReactElement } from "react"
import { tw } from "twind"
import { Dialog, DialogButton, FullScreenModalDialog } from "../ui/dialog"
import LoadingPlaceholder from "../ui/LoadingPlaceholder"

export default function NyaaSearchDialogButton({
	children,
	query,
}: {
	children: ReactElement
	query: string
}) {
	return (
		<Dialog>
			<DialogButton>{children}</DialogButton>
			<FullScreenModalDialog>
				<div className={tw`relative grid place-items-center h-full`}>
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
			</FullScreenModalDialog>
		</Dialog>
	)
}
