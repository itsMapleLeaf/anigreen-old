import { useEffect } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import SchedulePage from "../media/SchedulePage"
import WatchingPage from "../media/WatchingPage"

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Redirect to="/watching" />} />
			<Route path="/watching" element={<WatchingPage />} />
			<Route path="/schedule" element={<SchedulePage />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
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
