import type { ReactNode } from "react"
import { tw } from "twind"

export default function AspectBox({
	ratio,
	children,
}: {
	ratio: number
	children: ReactNode
}) {
	return (
		<div
			className={tw`w-full relative`}
			style={{ paddingBottom: `${(1 / ratio) * 100}%` }}
		>
			<div className={tw`absolute inset-0`}>{children}</div>
		</div>
	)
}
