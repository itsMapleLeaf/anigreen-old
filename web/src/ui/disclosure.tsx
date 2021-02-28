import { useState } from "react"

export function useDisclosure() {
	const [isOpen, setOpen] = useState(false)
	const open = () => setOpen(true)
	const close = () => setOpen(false)
	const toggle = () => setOpen((open) => !open)
	return { isOpen, open, close, toggle }
}
