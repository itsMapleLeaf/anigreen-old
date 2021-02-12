import { ReactNode, useLayoutEffect, useMemo } from "react"
import { createPortal } from "react-dom"

export default function Portal({ children }: { children: ReactNode }) {
	const container = useMemo(() => {
		return document.createElement("react-portal")
	}, [])

	useLayoutEffect(() => {
		document.body.append(container)
		return () => {
			container.remove()
		}
	}, [container])

	return createPortal(children, container)
}
