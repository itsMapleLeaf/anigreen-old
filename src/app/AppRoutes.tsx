import { useEffect } from "react"
import type { RouteProps } from "react-router"
import { Route, Routes, useNavigate } from "react-router-dom"
import SchedulePage from "../media/SchedulePage"
import WatchingPage from "../media/WatchingPage"

export default function AppRoutes() {
	return (
		<Routes>
			<CustomRoute
				title="Watching"
				path="/"
				element={<Redirect to="/watching" />}
			/>
			<CustomRoute
				title="Watching"
				path="/watching"
				element={<WatchingPage />}
			/>
			<CustomRoute
				title="Schedule"
				path="/schedule"
				element={<SchedulePage />}
			/>
			<CustomRoute title="Page not found" path="*" element={<NotFound />} />
		</Routes>
	)
}

function CustomRoute({ title, ...props }: RouteProps & { title: string }) {
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
	useEffect(() => navigate(to, { replace }), [navigate, replace, to])
	return null
}
