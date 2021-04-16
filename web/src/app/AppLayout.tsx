import React from "react"
import { Outlet } from "react-router-dom"
import LoadingSuspense from "../ui/LoadingSuspense"
import AppErrorBoundary from "./AppErrorBoundary"
import AppHeader from "./AppHeader"

export default function AppLayout() {
	return (
		<div className="h-screen pt-16 isolate">
			<AppHeader />
			<main className="w-full h-full max-w-screen-xl mx-auto">
				<AppErrorBoundary>
					<LoadingSuspense>
						<Outlet />
					</LoadingSuspense>
				</AppErrorBoundary>
			</main>
		</div>
	)
}
