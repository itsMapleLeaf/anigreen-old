import { useEffect } from "react"

export function useScrollListener(listener: (scroll: number) => void) {
	useEffect(() => {
		const handleScroll = () => listener(window.scrollY)
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	})
}
