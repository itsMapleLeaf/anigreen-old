import type { ReactElement, Ref } from "react"
import { forwardRef } from "react"

/**
 * Passes ref as a normal prop, makes `forwardRef`ing easier in some cases
 */
export function autoRef<Props, RefType>(fc: {
  (props: Props): ReactElement | null
  displayName?: string
}) {
  const AutoRef = (props: Props & { ref?: RefType }, ref: Ref<RefType>) =>
    fc({ ...props, ref })
  AutoRef.displayName = fc.displayName || fc.name || "AutoRef"
  return forwardRef(AutoRef)
}
