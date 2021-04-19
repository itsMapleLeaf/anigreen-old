import "focus-visible"
import { ReactElement, StrictMode } from "react"
import { unstable_createRoot } from "react-dom"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { BrowserRouter } from "react-router-dom"
import AppErrorBoundary from "./app/AppErrorBoundary"
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

unstable_createRoot(document.getElementById("root")!).render(
	<QueryClientProvider client={client}>
		<ReactQueryDevtools />
		<StrictMode>
			<BrowserRouter>
				<LoadingSuspense>
					<AppLayout>
						<AppErrorBoundary>
							<LoadingSuspense>
								<AppRoutes />
							</LoadingSuspense>
						</AppErrorBoundary>
					</AppLayout>
				</LoadingSuspense>
			</BrowserRouter>
		</StrictMode>
	</QueryClientProvider>,
)

declare module "react-dom" {
	export function unstable_createRoot(
		element: Element,
	): {
		render(element: ReactElement): void
	}
}
