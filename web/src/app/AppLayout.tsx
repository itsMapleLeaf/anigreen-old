import LoadingSuspense from "../ui/LoadingSuspense"
import AppErrorBoundary from "./AppErrorBoundary"
import AppHeader from "./AppHeader"

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="h-screen pt-16 isolate">
			<AppHeader />
			<main className="w-full h-full max-w-screen-xl mx-auto">
				<AppErrorBoundary>
					<LoadingSuspense>{children}</LoadingSuspense>
				</AppErrorBoundary>
			</main>
		</div>
	)
}
