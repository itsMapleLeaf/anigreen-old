import { tw } from "twind"
import { LoadingIcon } from "./icons"

export default function LoadingPlaceholder() {
	return (
		<div className={tw`grid justify-items-center`}>
			<LoadingIcon className={tw`w-12 h-12`} />
		</div>
	)
}
