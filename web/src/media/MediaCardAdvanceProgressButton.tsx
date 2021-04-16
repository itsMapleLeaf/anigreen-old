import { PlusIcon } from "@heroicons/react/solid"
import { useMutation, useQueryClient } from "react-query"
import { api } from "../api"
import Button from "../dom/Button"
import type {
	AnimeListEntryFragment,
	UpdateMediaListProgressMutationVariables,
} from "../generated/graphql"
import { clearIconButtonStyle } from "../ui/components"

export default function MediaCardAdvanceProgressButton({
	entry,
}: {
	entry: AnimeListEntryFragment
}) {
	const client = useQueryClient()

	const updateProgressMutation = useMutation(
		(variables: UpdateMediaListProgressMutationVariables) =>
			api.UpdateMediaListProgress(variables),
		{
			async onSuccess() {
				await client.invalidateQueries("AnimeList")
			},
		},
	)

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
