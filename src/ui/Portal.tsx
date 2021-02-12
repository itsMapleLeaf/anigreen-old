import { ReactNode, useEffect, useRef } from "react"
import { createPortal } from "react-dom"

export default function Portal({ children }: { children: ReactNode }) {
	const containerRef = useRef<Element>()

	if (!containerRef.current) {
		containerRef.current = document.createElement("react-portal")
		document.body.append(containerRef.current)
	}

	useEffect(() => () => containerRef.current!.remove(), [])

	return createPortal(children, containerRef.current)
}
