import type { ComponentPropsWithoutRef } from "react"
import { autoRef } from "../react/helpers"
import LoadingIcon from "../ui/LoadingIcon"

export type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  loading?: boolean
}

export default autoRef(function Button({
  loading,
  children,
  className = "",
  ...props
}: ButtonProps) {
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
