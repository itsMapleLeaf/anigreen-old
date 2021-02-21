import { ComponentPropsWithoutRef, forwardRef, ReactNode, Ref } from "react"

export default forwardRef(function ExternalLink(
	{
		href,
		children,
		...props
	}: ComponentPropsWithoutRef<"a"> & { href: string; children: ReactNode },
	ref: Ref<HTMLAnchorElement>,
) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			{...props}
			ref={ref}
		>
			{children}
		</a>
	)
})
