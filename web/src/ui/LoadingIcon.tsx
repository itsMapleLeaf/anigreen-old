import type { SVGProps } from "react"
import { animation } from "twind/css"

const spinAnimation = animation(`0.8s infinite`, {
	from: { transform: `rotate(0deg)` },
	to: { transform: `rotate(360deg)` },
})

export default function LoadingIcon({
	className,
	...props
}: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			tw={spinAnimation}
			className={className}
			{...props}
		>
			<path
				fill="currentColor"
				d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"
			/>
		</svg>
	)
}
