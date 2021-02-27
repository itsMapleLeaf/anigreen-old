import constate from "constate"
import { cloneElement, ReactElement, ReactNode, useMemo } from "react"
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
	const dialog = useDialogState({ animated: true })
	const buttonId = useMemo(() => `dialog-button-${Math.random()}`, [])
	return { dialog, buttonId }
})

export function Dialog({ children }: { children: ReactNode }) {
	return <DialogProvider>{children}</DialogProvider>
}

export function DialogButton({ children }: { children: ReactElement }) {
	const { dialog, buttonId } = useDialogContext()
	return (
		<DialogDisclosure {...dialog} id={buttonId}>
			{(disclosureProps) => cloneElement(children, disclosureProps)}
		</DialogDisclosure>
	)
}

export function FullScreenModalDialog({ children }: { children: ReactNode }) {
	const { dialog, buttonId } = useDialogContext()
	return (
		<DialogBackdrop
			{...dialog}
			className={tw`fixed inset-0 bg-black bg-opacity-75 flex flex-col p-4 transition-opacity opacity-0 reakit-transition-enter:opacity-100`}
		>
			<BaseDialog
				{...dialog}
				className={tw`flex flex-col space-y-4 h-full pointer-events-none transition-transform transform scale-95 reakit-transition-enter:scale-100`}
				aria-labelledby={buttonId}
			>
				<button
					type="button"
					onClick={() => dialog.hide()}
					className={tw(clearIconButtonStyle, "pointer-events-auto self-end")}
				>
					<CloseIcon />
				</button>
				<div
					className={tw`flex-1 bg-gray-800 rounded-lg overflow-y-auto shadow pointer-events-auto`}
				>
					{dialog.visible || dialog.animating ? children : null}
				</div>
			</BaseDialog>
		</DialogBackdrop>
	)
}
