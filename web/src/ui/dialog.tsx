import { XIcon } from "@heroicons/react/solid"
import * as RadixDialog from "@radix-ui/react-dialog"
import { Slot } from "@radix-ui/react-slot"
import type { ReactElement, ReactNode } from "react"
import { apply } from "twind"
import { css } from "twind/css"
import { clearIconButtonStyle } from "./components"
import { radixTransitionCustom } from "./helpers"

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
				tw={`fixed inset-0 bg(black opacity-75) ${radixTransitionCustom({
					start: apply`opacity-0`,
					end: apply`opacity-100`,
				})}`}
			/>
			<RadixDialog.Content
				tw={`
					fixed inset-0 p-4 flex flex-col space-y-4 pointer-events-none
					${radixTransitionCustom({
						start: apply`opacity-0 ${css({ transform: `scale(0.95)` })}`,
						end: apply`opacity-100 ${css({ transform: `scale(1.0)` })}`,
					})}
				`}
			>
				<RadixDialog.Close
					type="button"
					tw={[clearIconButtonStyle, "pointer-events-auto self-end"]}
				>
					<XIcon />
				</RadixDialog.Close>
				<div tw="flex-1 overflow-y-auto bg-gray-800 rounded-lg shadow pointer-events-auto">
					{children}
				</div>
			</RadixDialog.Content>
		</>
	)
}
