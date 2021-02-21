import type { ComponentPropsWithoutRef, ReactNode } from "react"

export default function ExternalLink({
	href,
	children,
	...props
}: ComponentPropsWithoutRef<"a"> & { href: string; children: ReactNode }) {
	return (
		<a href={href} target="_blank" rel="noopener noreferrer" {...props}>
			{children}
		</a>
	)
}
