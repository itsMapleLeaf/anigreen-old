import { useEffect, useRef } from "react"
import type { RouteProps } from "react-router"
import { Route, Routes, useNavigate } from "react-router-dom"
import SchedulePage from "../media/SchedulePage"
import WatchingPage from "../media/WatchingPage"

export default function AppRoutes() {
	return (
		<Routes>
			<AwesomeRoute
				title="Watching"
				path="/"
				element={<Redirect to="/watching" />}
			/>
			<AwesomeRoute
				title="Watching"
				path="/watching"
				element={<WatchingPage />}
			/>
			<AwesomeRoute
				title="Schedule"
				path="/schedule"
				element={<SchedulePage />}
			/>
			<AwesomeRoute title="Page not found" path="*" element={<NotFound />} />
		</Routes>
	)
}

function AwesomeRoute({ title, ...props }: RouteProps & { title: string }) {
	useEffect(() => {
		document.title = `${title} | anigreen`
	})
	return <Route {...props} />
}

function NotFound() {
	return (
		<div className="grid gap-4 p-8">
			<h1 className="text-3xl font-condensed">oops!</h1>
			<p>{`couldn't find this page :(`}</p>
		</div>
	)
}

function Redirect({ to, replace = true }: { to: string; replace?: boolean }) {
	const navigate = useNavigate()
	const didNavigate = useRef(false)

	useEffect(() => {
		if (!didNavigate.current) {
			navigate(to, { replace })
			didNavigate.current = true
		}
	})

	return null
}
