import type { ReactNode } from "react"
import { ErrorBoundary, FallbackProps } from "react-error-boundary"
import Button from "../dom/Button"
import { FetcherError } from "../network/createFetcher"
import { solidButtonStyle } from "../ui/components"
import LoginRequiredMessage from "./LoginRequiredMessage"

export default function AppErrorBoundary({
	children,
}: {
	children: ReactNode
}) {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
	)
}

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
	if (error instanceof FetcherError && error.status === 401) {
		return <LoginRequiredMessage />
	}

	return (
		<div className="grid gap-4 p-4">
			<p>An error occured :(</p>
			<div>
				<Button className={solidButtonStyle} onClick={resetErrorBoundary}>
					Try again
				</Button>
			</div>
		</div>
	)
}
