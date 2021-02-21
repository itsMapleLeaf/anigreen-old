import { ComponentPropsWithoutRef, forwardRef, Ref } from "react"
import { apply, tw } from "twind"
import { LoadingIcon } from "../ui/icons"

export type ForwardRefButtonComponent = (
	props: ComponentPropsWithoutRef<"button"> & { loading?: boolean },
	ref: Ref<HTMLButtonElement>,
) => JSX.Element

const Button: ForwardRefButtonComponent = (
	{ loading, children, className, ...props },
	ref,
) => (
	<button
		type="button"
		disabled={loading}
		className={tw`${loading && apply`opacity-50`} ${className}`}
		ref={ref}
		{...props}
	>
		{loading ? <LoadingIcon /> : children}
	</button>
)

export default forwardRef(Button)
