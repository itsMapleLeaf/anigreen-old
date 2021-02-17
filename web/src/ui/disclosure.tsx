import constate from "constate"
import { cloneElement, ReactElement, ReactNode, useState } from "react"

export function useDisclosure() {
	const [isOpen, setOpen] = useState(false)
	const open = () => setOpen(true)
	const close = () => setOpen(false)
	const toggle = () => setOpen((open) => !open)
	return { isOpen, open, close, toggle }
}

export const [Disclosure, useDisclosureContext] = constate(useDisclosure)

export function DisclosureButton({ children }: { children: ReactElement }) {
	const context = useDisclosureContext()

	return cloneElement(children, {
		onClick: (...args: unknown[]) => {
			context.toggle()
			children.props?.onClick(...args)
		},
	})
}

export function DisclosureContent({ children }: { children: ReactNode }) {
	const context = useDisclosureContext()
	return <>{context.isOpen ? children : null}</>
}
