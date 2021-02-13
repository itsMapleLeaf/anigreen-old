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
			className={tw`relative overflow-hidden rounded-lg bg-black shadow flex flex-col`}
		>
			<div className={tw`opacity-10`}>
				<Image
					src={entry?.media?.bannerImage}
					className={tw`w-full h-full absolute`}
				/>
			</div>

			<div className={tw`relative flex flex-1 pt-4 pb-3 pl-3 pr-2`}>
				<div className={tw`flex flex-col flex-1 space-y-3`}>
					<h3 className={tw`font-light text-2xl flex-1 -mt-2`}>
						{entry?.media?.title?.userPreferred}
					</h3>

					<div className={tw`opacity-70 flex-1`}>
						<p>{entry?.progress || "No"} episodes watched</p>
						<p>
							{formatNextEpisode(
								entry?.media?.nextAiringEpisode?.episode,
								entry?.media?.nextAiringEpisode?.airingAt,
							)}
						</p>
					</div>

					<button
						type="button"
						className={tw`opacity-50 hover:opacity-100 transition font-medium uppercase text-sm text-left py-1`}
					>
						Show More
					</button>
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
