import type { ComponentProps } from "react"
import { apply, tw } from "twind"
import { autoRef } from "../react/helpers"
import { LoadingIcon } from "../ui/icons"

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
			className={tw`${loading && apply`opacity-50`} ${className}`}
			{...props}
		>
			{loading ? <LoadingIcon /> : children}
		</button>
	)
})
