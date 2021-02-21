import React, { memo } from "react"
import { tw } from "twind"
import ExternalLink from "../dom/ExternalLink"
import type { AnimeListEntryFragment } from "../generated/graphql"
import { relativeTime } from "../helpers/relativeTime"
import { DotsVerticalIcon, ExternalLinkIcon, SearchIcon } from "../ui/icons"
import Image from "../ui/Image"
import { Menu, MenuButton, MenuItem, MenuPanel } from "../ui/menu"

export default memo(function MediaCard({
	entry,
	onSearch,
}: {
	entry?: AnimeListEntryFragment
	onSearch: (query: string) => void
}) {
	const handleNyaaSearch = () => {
		onSearch(
			entry?.media?.title?.romaji ||
				entry?.media?.title?.english ||
				entry?.media?.title?.native ||
				"",
		)
	}

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
					<Menu>
						<MenuButton
							className={tw`opacity-50 hover:opacity-75`}
							title="More actions"
						>
							<DotsVerticalIcon className={tw`w-6`} />
						</MenuButton>
						<MenuPanel placement="bottom-end">
							<MenuItem icon={<SearchIcon />} onClick={handleNyaaSearch}>
								Nyaa Search
							</MenuItem>
							<MenuItem
								as={ExternalLink}
								href={`https://anilist.co/anime/${entry?.media?.id}`}
								icon={<ExternalLinkIcon />}
							>
								View on AniList
							</MenuItem>
						</MenuPanel>
					</Menu>
				</div>
			</div>
		</div>
	)
})

function formatNextEpisode(episode?: number, airingTimeSeconds?: number) {
	if (episode && airingTimeSeconds) {
		return `Episode ${episode} airs ${relativeTime(airingTimeSeconds * 1000)}`
	}
}