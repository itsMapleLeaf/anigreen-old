import { PlusIcon } from "@heroicons/react/solid"
import Button from "../dom/Button"
import type { WatchingMediaFragment } from "../generated/graphql"
import { clearIconButtonStyle } from "../ui/components"
import { useMediaProgress } from "./useMediaProgress"

export default function WatchingMediaAdvanceProgressButton({
	mediaListEntry,
}: {
	mediaListEntry: WatchingMediaFragment
}) {
	const {
		isCaughtUp,
		advanceProgress,
		updateProgressMutation,
	} = useMediaProgress(mediaListEntry)

	if (isCaughtUp) {
		return null
	}

	return (
		<Button
			className={clearIconButtonStyle}
			onClick={advanceProgress}
			loading={updateProgressMutation.isLoading}
		>
			<span className="sr-only">Advance Progress</span>
			<PlusIcon className="w-5" />
		</Button>
	)
}
