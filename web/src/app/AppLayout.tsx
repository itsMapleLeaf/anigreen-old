import { useState } from "react"
import { useScrollListener } from "../dom/useScrollListener"
import AppHeader from "./AppHeader"

export default function AppLayout({ children }: { children: React.ReactNode }) {
	const scrolledToTop = useScrolledToTop()

	const headerBaseClass = `z-10 py-2 fixed inset-x-0 top-0 transition-colors duration-300 shadow backdrop-filter backdrop-blur-sm`
	const headerScrollClass = scrolledToTop
		? `bg-gray-800`
		: `bg-black bg-opacity-50`

	return (
		<div className="h-screen pt-16 isolate">
			<header className={`${headerBaseClass} ${headerScrollClass}`}>
				<div className="max-w-5xl px-4 mx-auto">
					<AppHeader />
				</div>
			</header>
			<main className="w-full max-w-5xl min-h-full px-4 py-6 mx-auto">
				{children}
			</main>
		</div>
	)
}

function useScrolledToTop() {
	// scroll bounce means the scroll can be negative
	const [scrolledToTop, setScrolledToTop] = useState(
		typeof window !== "undefined" ? window.scrollY <= 0 : false,
	)

	useScrollListener((scroll) => setScrolledToTop(scroll <= 0))

	return scrolledToTop
}
