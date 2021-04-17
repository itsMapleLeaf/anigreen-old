import { Route, Routes } from "react-router-dom"
import WatchingPage from "./WatchingPage"

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/watching" element={<WatchingPage />} />
		</Routes>
	)
}
