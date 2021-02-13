import { memo } from "react"
import { tw } from "twind"
import type { AnimeListEntryFragment } from "../generated/graphql"
import { AppMenu } from "../ui/AppMenu"
import { DotsVerticalIcon, SearchIcon } from "../ui/icons"
import Image from "../ui/Image"

export default memo(function MediaCard({
	entry,
	onSearch,
}: {
	entry?: AnimeListEntryFragment
	onSearch: (query: string) => void
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

			<div className={tw`relative flex flex-1 p-2 pl-3`}>
				<div className={tw`flex flex-col flex-1 space-y-3`}>
					<h3 className={tw`font-light text-2xl font-condensed`}>
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
						className={tw`opacity-50 hover:opacity-100 transition font-medium uppercase text-sm text-left`}
					>
						Show More
					</button>
				</div>

				<div>
					<AppMenu
						button={
							<button
								className={tw`opacity-50 hover:opacity-75`}
								title="More actions"
							>
								<DotsVerticalIcon />
							</button>
						}
						options={[
							{
								label: "Nyaa Search",
								icon: <SearchIcon />,
								onClick: () =>
									onSearch(
										entry?.media?.title?.romaji ||
											entry?.media?.title?.english ||
											entry?.media?.title?.native ||
											"",
									),
							},
						]}
					/>
				</div>
			</div>
		</div>
	)
})

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
