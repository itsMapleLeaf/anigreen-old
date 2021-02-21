import React, { memo } from "react"
import { useQueryClient } from "react-query"
import { tw } from "twind"
import Button from "../dom/Button"
import ExternalLink from "../dom/ExternalLink"
import {
	AnimeListEntryFragment,
	useUpdateMediaListProgressMutation,
} from "../generated/graphql"
import { relativeTime } from "../helpers/relativeTime"
import { clearIconButtonStyle } from "../ui/components"
import {
	DotsVerticalIcon,
	ExternalLinkIcon,
	InfoIcon,
	PlusIcon,
	SearchIcon,
} from "../ui/icons"
import IconWithText from "../ui/IconWithText"
import Image from "../ui/Image"
import { Menu, MenuButton, MenuItem, MenuPanel } from "../ui/menu"
import Tooltip from "../ui/Tooltip"

export default memo(function MediaCard({
	entry,
	onSearch,
}: {
	entry: AnimeListEntryFragment
	onSearch: (query: string) => void
}) {
	const { nextAiringEpisode } = entry?.media ?? {}

	const client = useQueryClient()
	const updateProgressMutation = useUpdateMediaListProgressMutation({
		async onSuccess() {
			await client.invalidateQueries("AnimeList")
		},
	})

	function handleNyaaSearch() {
		onSearch(
			entry?.media?.title?.romaji ||
				entry?.media?.title?.english ||
				entry?.media?.title?.native ||
				"",
		)
	}

	function advanceProgress() {
		updateProgressMutation.mutate({
			id: entry.id,
			progress: (entry.progress ?? 0) + 1,
		})
	}

	const moreMenu = (
		<Menu>
			<MenuButton className={tw(clearIconButtonStyle)}>
				<DotsVerticalIcon />
			</MenuButton>
			<MenuPanel>
				<MenuItem onClick={handleNyaaSearch}>
					<IconWithText iconLeft={<SearchIcon />} text="Nyaa Search" />
				</MenuItem>
				<MenuItem
					as={ExternalLink}
					href={`https://anilist.co/anime/${entry?.media?.id}`}
				>
					<IconWithText
						iconLeft={<ExternalLinkIcon />}
						text="View on AniList"
					/>
				</MenuItem>
			</MenuPanel>
		</Menu>
	)

	const nextEpisodeAirDate =
		nextAiringEpisode?.episode && nextAiringEpisode?.airingAt ? (
			<Tooltip text={formatNextEpisodeExactDate(nextAiringEpisode.airingAt)}>
				<div className={tw`flex space-x-1 items-center`}>
					<p>
						{formatNextEpisodeRelativeDate(
							nextAiringEpisode.episode,
							nextAiringEpisode.airingAt,
						)}
					</p>
					<InfoIcon />
				</div>
			</Tooltip>
		) : null

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

					<div className={tw`opacity-70 flex-1 grid justify-items-start`}>
						<p>{entry?.progress || "No"} episodes watched</p>
						{nextEpisodeAirDate}
					</div>
				</div>

				<div className={tw`flex flex-col justify-between`}>
					{moreMenu}

					<Button
						className={tw(clearIconButtonStyle)}
						onClick={advanceProgress}
						loading={updateProgressMutation.isLoading}
					>
						<PlusIcon />
					</Button>
				</div>
			</div>
		</div>
	)
})

function formatNextEpisodeRelativeDate(
	episode?: number,
	airingTimeSeconds?: number,
) {
	if (episode && airingTimeSeconds) {
		return `Episode ${episode} airs ${relativeTime(airingTimeSeconds * 1000)}`
	}
}

function formatNextEpisodeExactDate(airingTimeSeconds: number) {
	return new Date(airingTimeSeconds * 1000).toLocaleString(undefined, {
		weekday: "long",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
	})
}
