import type { ComponentProps, ReactNode } from "react"
import { autoRef } from "../react/helpers"

export default autoRef(function ExternalLink({
	href,
	children,
	...props
}: ComponentProps<"a"> & { href: string; children: ReactNode }) {
	return (
		<a href={href} target="_blank" rel="noopener noreferrer" {...props}>
			{children}
		</a>
	)
})
