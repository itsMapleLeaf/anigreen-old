import { PlusIcon } from "@heroicons/react/solid"
import Button from "../dom/Button"
import { MediaList, query, useMutation } from "../graphql"
import { clearIconButtonStyle } from "../ui/components"

export default function WatchingMediaAdvanceProgressButton({
	entry,
}: {
	entry: MediaList
}) {
	const [updateProgress, updateProgressMutation] = useMutation(
		(mutation) => {
			const { id } =
				mutation.SaveMediaListEntry({
					id: entry.id,
					progress: (entry.progress ?? 0) + 1,
				}) ?? {}
			return id
		},
		{
			refetchQueries: [query.MediaListCollection],
		},
	)

	return (
		<Button
			className={clearIconButtonStyle}
			onClick={() => updateProgress()}
			loading={updateProgressMutation.isLoading}
		>
			<PlusIcon className="w-5" />
		</Button>
	)
}
