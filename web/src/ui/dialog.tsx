import constate from "constate"
import React, { cloneElement, ReactElement, ReactNode } from "react"
import {
	Dialog as BaseDialog,
	DialogBackdrop,
	DialogDisclosure,
	useDialogState,
} from "reakit"
import { tw } from "twind"
import { clearIconButtonStyle } from "./components"
import { CloseIcon } from "./icons"

export const [DialogProvider, useDialogContext] = constate(() => {
	const dialog = useDialogState({
		animated: true,
	})
	return { dialog }
})

export function Dialog({ children }: { children: ReactNode }) {
	return <DialogProvider>{children}</DialogProvider>
}

export function DialogButton({ children }: { children: ReactElement }) {
	const { dialog } = useDialogContext()
	return (
		<DialogDisclosure {...dialog}>
			{(disclosureProps) => cloneElement(children, disclosureProps)}
		</DialogDisclosure>
	)
}

export function FullScreenModalDialog({ children }: { children: ReactNode }) {
	const { dialog } = useDialogContext()
	return (
		<DialogBackdrop
			{...dialog}
			className={tw`fixed inset-0 bg-black bg-opacity-75 flex flex-col p-4 transition-opacity opacity-0 reakit-transition-enter:opacity-100`}
		>
			<BaseDialog
				{...dialog}
				className={tw`flex flex-col space-y-4 h-full pointer-events-none transition-transform transform scale-95 reakit-transition-enter:scale-100`}
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
					className={tw`flex-1 bg-gray-800 rounded-lg overflow-y-auto shadow`}
				>
					{dialog.visible || dialog.animating ? children : null}
				</div>
			</BaseDialog>
		</DialogBackdrop>
	)
}
