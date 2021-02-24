import { memo } from "react"
import { useQueryClient } from "react-query"
import { tw } from "twind"
import Button from "../dom/Button"
import ExternalLink from "../dom/ExternalLink"
import {
	AnimeListEntryFragment,
	useUpdateMediaListProgressMutation,
} from "../generated/graphql"
import { relativeTime } from "../helpers/relativeTime"
import AspectBox from "../ui/AspectBox"
import { clearIconButtonStyle } from "../ui/components"
import { Dialog, DialogButton, FullScreenModalDialog } from "../ui/dialog"
import {
	DotsVerticalIcon,
	ExternalLinkIcon,
	InfoIcon,
	PlusIcon,
	SearchIcon,
} from "../ui/icons"
import IconWithText from "../ui/IconWithText"
import Image from "../ui/Image"
import LoadingPlaceholder from "../ui/LoadingPlaceholder"
import { Menu, MenuButton, MenuItem, MenuPanel } from "../ui/menu"
import Tooltip from "../ui/Tooltip"

export default memo(function MediaCard({
	entry,
}: {
	entry: AnimeListEntryFragment
}) {
	const { nextAiringEpisode } = entry?.media ?? {}

	const client = useQueryClient()
	const updateProgressMutation = useUpdateMediaListProgressMutation({
		async onSuccess() {
			await client.invalidateQueries("AnimeList")
		},
	})

	const nyaaSearchQuery =
		entry?.media?.title?.romaji ||
		entry?.media?.title?.english ||
		entry?.media?.title?.native ||
		""

	function advanceProgress() {
		updateProgressMutation.mutate({
			id: entry.id,
			progress: (entry.progress ?? 0) + 1,
		})
	}

	const moreMenu = (
		<Menu>
			<MenuButton>
				<Button className={tw(clearIconButtonStyle)}>
					<DotsVerticalIcon />
				</Button>
			</MenuButton>
			<MenuPanel>
				<Dialog>
					<DialogButton>
						<MenuItem keepOpen>
							<Button>
								<IconWithText iconLeft={<SearchIcon />} text="Nyaa Search" />
							</Button>
						</MenuItem>
					</DialogButton>

					<FullScreenModalDialog>
						<div className={tw`relative grid place-items-center h-full`}>
							<LoadingPlaceholder />
							<iframe
								title="Nyaa Search"
								src={`https://nyaa.si/?f=1&c=1_2&q=${nyaaSearchQuery}`}
								className={tw`absolute`}
								width="100%"
								height="100%"
								frameBorder="0"
							/>
						</div>
					</FullScreenModalDialog>
				</Dialog>

				<MenuItem>
					<ExternalLink href={`https://anilist.co/anime/${entry?.media?.id}`}>
						<IconWithText
							iconLeft={<ExternalLinkIcon />}
							text="View on AniList"
						/>
					</ExternalLink>
				</MenuItem>
			</MenuPanel>
		</Menu>
	)

	const progress = entry.progress ?? 0

	const nextAiringEpisodeNumber = entry.media?.nextAiringEpisode?.episode

	const maxEpisodes = nextAiringEpisodeNumber
		? nextAiringEpisodeNumber - 1
		: entry.media?.episodes ?? 1

	const progressLag = maxEpisodes - progress

	const progressLagStyle =
		progressLag === 0
			? tw`text-green-400`
			: progressLag <= 3
			? tw`text-yellow-400`
			: tw`text-red-400`

	const episodesWatched = (
		<p className={progressLagStyle}>
			{progress}/{maxEpisodes} episodes watched
		</p>
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
			className={tw`relative overflow-hidden rounded-lg shadow flex flex-col`}
		>
			<div className={tw`bg-black p-2 relative`}>
				<div className={tw`absolute inset-0 opacity-50`}>
					<Image
						src={entry?.media?.bannerImage}
						className={tw`w-full h-full`}
					/>
				</div>

				<div
					className={tw`absolute inset-0 bg-gradient-to-t opacity-75 from-black to-transparent p-2`}
				></div>

				<div className={tw`w-1/3`}>
					<AspectBox ratio={3 / 4}>
						<Image
							src={entry.media?.coverImage?.large}
							className={tw`w-full h-full rounded-md shadow`}
						/>
					</AspectBox>
				</div>

				<div className={tw`absolute right-2 bottom-2`}>{moreMenu}</div>
			</div>

			<div className={tw`relative flex flex-1 p-2 pl-3 bg-gray-800`}>
				<div className={tw`flex flex-col flex-1`}>
					<h3 className={tw`font-light text-xl font-condensed flex-1`}>
						{entry?.media?.title?.userPreferred}
					</h3>
					<div className={tw`flex-1`} />
					<div className={tw`opacity-70 mt-2`}>
						{episodesWatched}
						{nextEpisodeAirDate}
					</div>
				</div>
			</div>

			<div className={tw`absolute bottom-2 right-2`}>
				<Button
					className={tw(clearIconButtonStyle)}
					onClick={advanceProgress}
					loading={updateProgressMutation.isLoading}
				>
					<PlusIcon />
				</Button>
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
