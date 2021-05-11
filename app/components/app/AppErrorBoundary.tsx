import type { ReactNode } from "react"
import { ErrorBoundary, FallbackProps } from "react-error-boundary"
import { useLocation } from "react-router-dom"
import Button from "../dom/Button"
import { isAuthError } from "../helpers/isAuthError"
import { solidButtonStyle } from "../ui/components"
import LoginRequiredMessage from "./LoginRequiredMessage"

export default function AppErrorBoundary({
	children,
}: {
	children: ReactNode
}) {
	const location = useLocation()
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback} resetKeys={[location]}>
			{children}
		</ErrorBoundary>
	)
}

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
	if (isAuthError(error)) {
		return <LoginRequiredMessage />
	}

	return (
		<div className="grid gap-4">
			<p>An error occured :(</p>
			<div>
				<Button className={solidButtonStyle} onClick={resetErrorBoundary}>
					Try again
				</Button>
			</div>
		</div>
	)
}
