import { PropsWithChildren, useLayoutEffect, useState } from "react"
import { createPortal } from "react-dom"

function Portal({ children }: PropsWithChildren<{}>) {
	const [container, setContainer] = useState<Element>()

	useLayoutEffect(() => {
		const el = document.createElement("react-portal")
		document.body.append(el)
		setContainer(el)

		return () => el.remove()
	}, [])

	return container ? createPortal(children, container) : null
}

export default Portal
