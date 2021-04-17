import "focus-visible"
import { StrictMode } from "react"
import { render } from "react-dom"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { BrowserRouter } from "react-router-dom"
import AppLayout from "./app/AppLayout"
import AppRoutes from "./app/AppRoutes"
import "./tailwind.css"
import LoadingSuspense from "./ui/LoadingSuspense"

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
				<LoadingSuspense>
					<AppLayout>
						<AppRoutes />
					</AppLayout>
				</LoadingSuspense>
			</BrowserRouter>
		</StrictMode>
	</QueryClientProvider>,
	document.getElementById("root"),
)
