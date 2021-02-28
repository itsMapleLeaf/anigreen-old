import * as RadixDialog from "@radix-ui/react-dialog"
import { Slot } from "@radix-ui/react-slot"
import type { ReactElement, ReactNode } from "react"
import { apply, tw } from "twind"
import { css } from "twind/css"
import { clearIconButtonStyle } from "./components"
import { radixTransitionCustom } from "./helpers"
import { CloseIcon } from "./icons"

export function Dialog({
	children,
	isOpen,
	onOpenChange,
}: {
	children: ReactNode
	isOpen?: boolean
	onOpenChange?: (isOpen: boolean) => void
}) {
	return (
		<RadixDialog.Root open={isOpen} onOpenChange={onOpenChange}>
			{children}
		</RadixDialog.Root>
	)
}

export function DialogButton({ children }: { children: ReactElement }) {
	return <RadixDialog.Trigger as={Slot}>{children}</RadixDialog.Trigger>
}

export function FullScreenModalDialog({ children }: { children: ReactNode }) {
	return (
		<>
			<RadixDialog.Overlay
				className={tw`fixed inset-0 bg(black opacity-75) ${radixTransitionCustom(
					{
						start: apply`opacity-0`,
						end: apply`opacity-100`,
					},
				)}`}
			/>
			<RadixDialog.Content
				className={tw`
					fixed inset-0 p-4 flex flex-col space-y-4 pointer-events-none
					${radixTransitionCustom({
						start: apply`opacity-0 ${css({ transform: `scale(0.95)` })}`,
						end: apply`opacity-100 ${css({ transform: `scale(1.0)` })}`,
					})}
				`}
			>
				<RadixDialog.Close
					type="button"
					className={tw(clearIconButtonStyle, "pointer-events-auto self-end")}
				>
					<CloseIcon />
				</RadixDialog.Close>
				<div
					className={tw`flex-1 bg-gray-800 rounded-lg overflow-y-auto shadow pointer-events-auto`}
				>
					{children}
				</div>
			</RadixDialog.Content>
		</>
	)
}
