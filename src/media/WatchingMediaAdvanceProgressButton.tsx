import { PlusIcon } from "@heroicons/react/solid"
import { useMutation, useQueryClient } from "react-query"
import { api } from "../api"
import Button from "../dom/Button"
import { clearIconButtonStyle } from "../ui/components"
import { WATCHING_MEDIA_LIST_QUERY_KEY } from "./WatchingPage"

export default function WatchingMediaAdvanceProgressButton({
	mediaListEntryId,
	progress,
}: {
	mediaListEntryId: number
	progress: number
}) {
	const client = useQueryClient()

	const updateProgressMutation = useMutation(api.UpdateMediaListProgress, {
		async onSuccess() {
			await client.invalidateQueries(WATCHING_MEDIA_LIST_QUERY_KEY)
		},
	})

	function advanceProgress() {
		updateProgressMutation.mutate({
			id: mediaListEntryId,
			progress: (progress ?? 0) + 1,
		})
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
