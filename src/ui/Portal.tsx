import React from "react"
import ReactDOM from "react-dom"

function Portal({ children }: React.PropsWithChildren<{}>) {
	const [container, setContainer] = React.useState<Element>()

	React.useLayoutEffect(() => {
		const el = document.createElement("react-portal")
		document.body.append(el)
		setContainer(el)

		return () => el.remove()
	}, [])

	return container ? ReactDOM.createPortal(children, container) : null
}

export default Portal
