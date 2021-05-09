import { createPopper } from "@popperjs/core"
import constate from "constate"
import { useEffect, useState } from "react"

export function usePopper() {
	const [referenceElement, referenceRef] = useState<Element | null>()
	const [popperElement, popperRef] = useState<HTMLElement | null>()

	useEffect(() => {
		if (referenceElement && popperElement) {
			const popper = createPopper(referenceElement, popperElement, {
				placement: "bottom",
			})
			return () => {
				popper.destroy()
			}
		}
	}, [popperElement, referenceElement])

	return {
		referenceRef,
		popperRef,
	}
}

export function createPopperContext() {
	const [Provider, usePopperContext] = constate(usePopper)

	function Root({ children }: { children: React.ReactNode }) {
		return <Provider>{children}</Provider>
	}

	function Reference({ children }: { children: React.ReactNode }) {
		const { referenceRef } = usePopperContext()
		return <div ref={referenceRef}>{children}</div>
	}

	function Element({ children }: { children: React.ReactNode }) {
		const { popperRef } = usePopperContext()
		return <div ref={popperRef}>{children}</div>
	}

	return { Root, Reference, Element }
}
