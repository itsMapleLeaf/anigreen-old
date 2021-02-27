import * as RadixDialog from "@radix-ui/react-dialog"
import { Slot } from "@radix-ui/react-slot"
import { ReactElement, ReactNode, useState } from "react"
import { tw } from "twind"
import { apply, css, keyframes } from "twind/css"

// @ts-expect-error
const fade = keyframes({
	from: apply`opacity-0`,
	to: apply`opacity-100`,
})

const slideLeft = keyframes({
	from: { transform: `translateX(-100%)` },
	to: { transform: `translateX(0)` },
})

function radixTransition(animationName: ReturnType<typeof keyframes>) {
	return css({
		"&[data-state='open']": {
			animationDuration: "2s",
			animationName,
			animationFillMode: "forwards",
		},
		"&[data-state='closed']": {
			animationDuration: "2s",
			animationName,
			animationFillMode: "forwards",
			animationDirection: "reverse",
		},
	})
}

export default function Drawer(props: {
	trigger: ReactElement
	children: ReactNode
}) {
	const [open, setOpen] = useState(false)
	return (
		<RadixDialog.Root open={open} onOpenChange={setOpen}>
			<RadixDialog.Trigger as={Slot}>{props.trigger}</RadixDialog.Trigger>
			<RadixDialog.Overlay
				className={tw`fixed inset-0 bg(black opacity-75) ${radixTransition(
					fade,
				)}`}
			/>
			<RadixDialog.Content
				className={tw`fixed inset-y-0 left-0 bg-gray-800 shadow transform ${radixTransition(
					slideLeft,
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
