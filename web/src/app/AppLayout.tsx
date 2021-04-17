import { useCallback } from "react"
import { useScrollSelector } from "../dom/useScrollSelector"
import LoadingSuspense from "../ui/LoadingSuspense"
import AppErrorBoundary from "./AppErrorBoundary"
import AppHeader from "./AppHeader"

export default function AppLayout({ children }: { children: React.ReactNode }) {
	const isAtTop = useScrollSelector(useCallback((scroll) => scroll === 0, []))

	const headerBaseClass = `z-10 py-2 fixed inset-x-0 top-0 transition-colors duration-300 shadow backdrop-filter backdrop-blur-sm`
	const headerScrollClass = isAtTop ? `bg-gray-800` : `bg-black bg-opacity-75`

	return (
		<div className="h-screen pt-16 isolate">
			<header className={`${headerBaseClass} ${headerScrollClass}`}>
				<div className="max-w-screen-xl px-4 mx-auto">
					<AppHeader />
				</div>
			</header>
			<main className="w-full h-full max-w-screen-xl px-4 mx-auto">
				<AppErrorBoundary>
					<LoadingSuspense>{children}</LoadingSuspense>
				</AppErrorBoundary>
			</main>
		</div>
	)
}
