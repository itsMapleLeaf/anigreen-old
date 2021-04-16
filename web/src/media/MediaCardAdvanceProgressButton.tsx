import { PlusIcon } from "@heroicons/react/solid"
import { useQueryClient } from "react-query"
import Button from "../dom/Button"
import {
	AnimeListEntryFragment,
	useUpdateMediaListProgressMutation,
} from "../generated/graphql"
import { clearIconButtonStyle } from "../ui/components"

export default function MediaCardAdvanceProgressButton({
	entry,
}: {
	entry: AnimeListEntryFragment
}) {
	const client = useQueryClient()
	const updateProgressMutation = useUpdateMediaListProgressMutation({
		async onSuccess() {
			await client.invalidateQueries("AnimeList")
		},
	})

	function advanceProgress() {
		updateProgressMutation.mutate({
			id: entry.id,
			progress: (entry.progress ?? 0) + 1,
		})
	}

	return (
		<Button
			className={clearIconButtonStyle}
			onClick={advanceProgress}
			loading={updateProgressMutation.isLoading}
		>
			<PlusIcon className="w-5" />
		</Button>
	)
}
