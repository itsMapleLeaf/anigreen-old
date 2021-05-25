import type { ComponentPropsWithoutRef } from "react"
import { useEffect, useRef } from "react"

/** HTML <img> tag with defaults */
export default function Image({
  src,
  className,
  ...props
}: ComponentPropsWithoutRef<"img">) {
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const image = imageRef.current!
    image.style.opacity = "0"

    if (image.complete) {
      image.style.opacity = "1"
    } else {
      const handleLoad = () => {
        image.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 300,
          fill: "forwards",
        })
      }
      image.addEventListener("load", handleLoad)
      return () => image.removeEventListener("load", handleLoad)
    }
  }, [])

  return (
    <img
      alt=""
      loading="lazy"
      ref={imageRef}
      src={src}
      className={`object-cover ${className}`}
      {...props}
    />
  )
}
