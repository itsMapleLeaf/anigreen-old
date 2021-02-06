import { useEffect, useState } from "react"

export function useScrollSelector<T>(selector: (scroll: number) => T) {
	const [value, setValue] = useState(() => selector(window.scrollY))

	useEffect(() => {
		setValue(selector(window.scrollY))
	}, [selector])

	useEffect(() => {
		const handleScroll = () => setValue(selector(window.scrollY))
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	})

	return value
}
