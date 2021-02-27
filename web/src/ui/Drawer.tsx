import * as RadixDialog from "@radix-ui/react-dialog"
import { Slot } from "@radix-ui/react-slot"
import { ReactElement, ReactNode, useState } from "react"
import { apply, tw } from "twind"
import { radixTransitionCustom } from "./helpers"

export default function Drawer(props: {
	trigger: ReactElement
	children: ReactNode
}) {
	const [open, setOpen] = useState(false)
	return (
		<RadixDialog.Root open={open} onOpenChange={setOpen}>
			<RadixDialog.Trigger as={Slot}>{props.trigger}</RadixDialog.Trigger>
			<RadixDialog.Overlay
				className={tw`fixed inset-0 bg(black opacity-75) ${radixTransitionCustom(
					{
						start: apply`opacity-0`,
						end: apply`opacity-100`,
					},
				)}`}
			/>
			<RadixDialog.Content
				className={tw`fixed inset-y-0 left-0 bg-gray-800 shadow transform ${radixTransitionCustom(
					{
						start: { transform: `translateX(-100%)` },
						end: { transform: `translateX(0)` },
					},
				)}`}
			>
				{props.children}
			</RadixDialog.Content>
		</RadixDialog.Root>
	)
}

export function DrawerItem({ children }: { children: ReactElement }) {
	return <RadixDialog.Close as={Slot}>{children}</RadixDialog.Close>
}
