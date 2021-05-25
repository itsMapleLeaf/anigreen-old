import { useEffect, useState } from "react"
import { useEffectRef } from "../react/useEffectRef"

export default function InfiniteScrollCursor(props: {
  onEnterPage: () => void
}) {
  const [element, ref] = useState<Element | null>()

  const onEnterPageRef = useEffectRef(props.onEnterPage)

  useEffect(() => {
    if (!element) return

    const observer = new IntersectionObserver(([info]) => {
      if (info?.isIntersecting) onEnterPageRef.current()
    })

    observer.observe(element)
    return () => {
      observer.disconnect()
    }
  }, [element, onEnterPageRef])

  return <div className="w-px h-px" ref={ref} />
}
