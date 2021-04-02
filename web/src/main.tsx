import { StrictMode } from "react"
import { render } from "react-dom"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./app/AppLayout"
import WatchingPage from "./app/WatchingPage"
import { NyaaSearchPage } from "./nyaa/nyaa-search"

const client = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Infinity,
			retry: false,
			suspense: true,
		},
	},
})

render(
	<QueryClientProvider client={client}>
		<ReactQueryDevtools />
		<StrictMode>
			<BrowserRouter>
				<Routes>
					<Route element={<AppLayout />}>
						<Route path="/watching" element={<WatchingPage />} />
						<Route path="/search" element={<NyaaSearchPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</StrictMode>
	</QueryClientProvider>,
	document.getElementById("root"),
)
