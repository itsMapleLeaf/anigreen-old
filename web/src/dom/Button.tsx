import type { ComponentProps } from "react"
import { apply } from "twind"
import { autoRef } from "../react/helpers"
import LoadingIcon from "../ui/LoadingIcon"

type Props = ComponentProps<"button"> & {
	loading?: boolean
}

export default autoRef(function Button({
	loading,
	children,
	className,
	...props
}: Props) {
	return (
		<button
			type="button"
			disabled={loading}
			tw={loading && apply`opacity-50`}
			className={className}
			{...props}
		>
			{loading ? <LoadingIcon tw="w-5" /> : children}
		</button>
	)
})
