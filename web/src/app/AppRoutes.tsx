import { Route, Routes } from "react-router-dom"
import WatchingPage from "./WatchingPage"

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/watching" element={<WatchingPage />} />
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
