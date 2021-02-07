import { ComponentPropsWithoutRef, useLayoutEffect, useRef } from "react"
import { tw } from "twind"

/** HTML <img> tag with defaults */
export default function Image({
	src,
	className,
	...props
}: Omit<ComponentPropsWithoutRef<"img">, "src"> & {
	src: string | undefined | null
}) {
	const imageRef = useRef<HTMLImageElement>(null)

	useLayoutEffect(() => {
		const image = imageRef.current!

		image.style.opacity = "0"
		image.style.transition = "0.3s"

		if (image.complete) {
			image.style.opacity = "1"
		} else {
			const handleLoad = () => {
				image.style.opacity = "1"
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
			src={src || undefined}
			className={tw`object-cover ${className}`}
			{...props}
		/>
	)
}
