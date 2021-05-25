import type { SVGProps } from "react"

export default function LoadingIcon({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`spin ${className}`}
      {...props}
    >
      <path
        fill="currentColor"
        d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"
      />
    </svg>
  )
}
