import type { ReactNode } from "react"
import { tw } from "twind"
import type { AnimeListEntryFragment } from "../generated/graphql"
import { DotsVerticalIcon } from "../ui/icons"
import Image from "../ui/Image"

export default function MediaCard({
	entry,
}: {
	entry?: AnimeListEntryFragment
}) {
	return (
		<div
			className={tw`relative rounded-lg overflow-hidden shadow bg-gray-800 flex flex-col`}
		>
			<Image
				src={entry?.media?.bannerImage}
				className={tw`w-full`}
				style={{ aspectRatio: "2/1" }}
			/>

			<div className={tw`flex-1 flex py-4 pl-3 pr-2`}>
				<div className={tw`flex flex-col flex-1`}>
					<h3 className={tw`font-light text-2xl flex-1 -mt-2`}>
						{entry?.media?.title?.userPreferred}
					</h3>
					<p>{entry?.progress || "No"} episodes watched</p>
					<p>
						{formatNextEpisode(
							entry?.media?.nextAiringEpisode?.episode,
							entry?.media?.nextAiringEpisode?.airingAt,
						)}
					</p>
				</div>

				<div>
					<button
						type="button"
						className={tw`opacity-50 hover:opacity-75`}
						title="More actions"
					>
						<DotsVerticalIcon />
					</button>
				</div>
			</div>
		</div>
	)
}

function formatNextEpisode(episode?: number, airingTimeSeconds?: number) {
	if (episode && airingTimeSeconds) {
		const date = new Date(Number(airingTimeSeconds) * 1000)

		const dateString = date.toLocaleDateString(undefined, {
			weekday: "long",
			day: "numeric",
			month: "long",
		})

		return `Episode ${episode} airs on ${dateString}`
	}
}

export function CardField(props: { title: ReactNode; content: ReactNode }) {
	return (
		<div className={tw`flex-1`}>
			<h4
				className={tw`text-xs uppercase opacity-50 font-medium tracking-wider`}
			>
				{props.title}
			</h4>
			<p className={tw`text-xl font-light`}>{props.content}</p>
		</div>
	)
}
