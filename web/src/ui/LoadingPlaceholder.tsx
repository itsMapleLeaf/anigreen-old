import { LoadingIcon } from "./icons"

export default function LoadingPlaceholder() {
	return (
		<div tw="grid justify-items-center p-4">
			<LoadingIcon tw="w-12 h-12" />
		</div>
	)
}
