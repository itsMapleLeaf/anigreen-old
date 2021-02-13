import type { ReactNode } from "react"
import { tw } from "twind"
import type { AnimeListEntryFragment } from "../generated/graphql"
import { DotsVerticalIcon, PlusIcon } from "../ui/icons"
import Image from "../ui/Image"

export default function MediaCard({
	entry,
}: {
	entry?: AnimeListEntryFragment
}) {
	return (
		<div className={tw`relative rounded-lg overflow-hidden shadow bg-gray-800`}>
			<Image
				src={entry?.media?.bannerImage}
				className={tw`absolute w-full h-full transform scale-110`}
				style={{ filter: `brightness(0.15) blur(6px)` }}
			/>

			<div className={tw`p-4 relative flex`}>
				<Image
					className={tw`rounded-md shadow w-32 h-40 hidden mr-4 sm:block`}
					src={entry?.media?.coverImage?.large}
				/>

				<div className={tw`flex-1 flex flex-col space-y-2`}>
					<div className={tw`flex-1`}>
						<div className={tw`float-right flex space-x-2`}>
							<button
								type="button"
								className={tw`opacity-50 hover:opacity-75 transition`}
								title="Add progress"
							>
								<PlusIcon />
							</button>
							<button
								type="button"
								className={tw`opacity-50 hover:opacity-75 transition`}
								title="More actions"
							>
								<DotsVerticalIcon />
							</button>
						</div>
						<h3 className={tw`font-light text-3xl`}>
							{entry?.media?.title?.userPreferred}
						</h3>
					</div>

					<div
						className={tw`flex flex-col opacity-75 font-light text-lg leading-6`}
					>
						<p>{entry?.progress || "No"} episodes watched</p>
						<p>
							{formatNextEpisode(
								entry?.media?.nextAiringEpisode?.episode,
								entry?.media?.nextAiringEpisode?.airingAt,
							)}
						</p>
					</div>
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
