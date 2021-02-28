import { StrictMode } from "react"
import { render } from "react-dom"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import App from "./app/App"
import { NyaaSearchRoot } from "./nyaa/nyaa-search"

const client = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Infinity,
		},
	},
})

render(
	<StrictMode>
		<QueryClientProvider client={client}>
			<NyaaSearchRoot>
				<App />
			</NyaaSearchRoot>
			<ReactQueryDevtools />
		</QueryClientProvider>
	</StrictMode>,
	document.getElementById("root"),
)
