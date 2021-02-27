import { StrictMode } from "react"
import { render } from "react-dom"
import { QueryClient, QueryClientProvider } from "react-query"
// import { ReactQueryDevtools } from "react-query/devtools"
import App from "./app/App"

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
			<App />
			{/* <ReactQueryDevtools /> */}
		</QueryClientProvider>
	</StrictMode>,
	document.getElementById("root"),
)
