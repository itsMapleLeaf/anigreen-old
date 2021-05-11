import { useState } from "react"
import { useScrollListener } from "../dom/useScrollListener"

export default function AppHeaderContainer({
  children,
}: {
  children: React.ReactNode
}) {
  const scrolledToTop = useScrolledToTop()

  const headerBaseClass = `z-10 py-2 fixed inset-x-0 top-0 transition-colors duration-300 shadow backdrop-filter backdrop-blur-sm`
  const headerScrollClass = scrolledToTop
    ? `bg-gray-800`
    : `bg-black bg-opacity-50`

  return (
    <div className={`${headerBaseClass} ${headerScrollClass}`}>{children}</div>
  )
}

function useScrolledToTop() {
  // scroll bounce means the scroll can be negative
  const [scrolledToTop, setScrolledToTop] = useState(
    typeof window !== "undefined" ? window.scrollY <= 0 : true
  )

  useScrollListener((scroll) => setScrolledToTop(scroll <= 0))

  return scrolledToTop
}
