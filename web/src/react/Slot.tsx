import * as React from "react"

/**
 * JSX version of cloneElement, can be cleaner sometimes
 */
export default function Slot({
	element,
	...props
}: {
	element: React.ReactElement
} & Record<string, unknown>) {
	return React.cloneElement(element, props)
}
