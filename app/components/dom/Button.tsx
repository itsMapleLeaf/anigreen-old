import type { ComponentProps } from "react"
import { autoRef } from "../react/helpers"
import LoadingIcon from "../ui/LoadingIcon"

type Props = ComponentProps<"button"> & {
	loading?: boolean
}

export default autoRef(function Button({
	loading,
	children,
	className = "",
	...props
}: Props) {
	return (
		<button
			type="button"
			disabled={loading}
			className={`${loading ? `opacity-50` : ""} ${className}`}
			{...props}
		>
			{loading ? <LoadingIcon className="w-5" /> : children}
		</button>
	)
})
