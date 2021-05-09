import {
	BookmarkIcon,
	DotsVerticalIcon,
	ExternalLinkIcon,
	MinusCircleIcon,
	PauseIcon,
} from "@heroicons/react/solid"
import { merge } from "lodash-es"
import { useQueryClient } from "react-query"
import ExternalLink from "../dom/ExternalLink"
import {
	MediaExternalLinkFragment,
	MediaFragment,
	MediaListStatus,
	MediaQuery,
	useMediaQuery,
	useSetMediaStatusMutation,
	useViewerQuery,
	useViewerWatchedMediaListQuery,
} from "../generated/graphql"
import { isTruthy } from "../helpers/isTruthy"
import { raise } from "../helpers/raise"
import { clearIconButtonStyle } from "../ui/components"
import IconWithText from "../ui/IconWithText"
import { Menu, MenuButton, MenuItem, MenuPanel } from "../ui/menu"

export default function MediaMenu({
	media: mediaProp,
}: {
	media: MediaFragment
}) {
	const client = useQueryClient()

	const mediaQuery = useMediaQuery(
		{ mediaId: mediaProp.id },
		{ initialData: { Media: mediaProp } },
	)
	const media = mediaQuery.data?.Media
	const watchingStatus = media?.mediaListEntry?.status
	console.log({ watchingStatus })

	const viewerId =
		useViewerQuery().data?.Viewer?.id ?? raise("expected viewerId")

	const setStatusMutation = useSetMediaStatusMutation({
		async onSuccess(data) {
			client.setQueryData<MediaQuery>(
				useMediaQuery.getKey({ mediaId: mediaProp.id }),
				(current) =>
					merge(current, {
						Media: {
							mediaListEntry: data.SaveMediaListEntry,
						},
					}),
			)

			await client.invalidateQueries(
				useViewerWatchedMediaListQuery.getKey({ userId: viewerId }),
			)

			await client.invalidateQueries("RecentlyAired")
		},
	})

	const externalLinks =
		media?.externalLinks?.filter(isTruthy).map((link) => ({
			...link,
			url: getMobileFriendlyUrl(link.url),
		})) ?? []

	function otherLinkExistsWithSameName(link: MediaExternalLinkFragment) {
		return externalLinks.some(
			(other) => other.id !== link.id && other.site === link.site,
		)
	}

	return (
		<Menu>
			<MenuButton className={clearIconButtonStyle}>
				<span className="sr-only">More Actions</span>
				<DotsVerticalIcon className="w-5" />
			</MenuButton>

			<MenuPanel>
				{watchingStatus !== MediaListStatus.Current ? (
					<MenuItem
						title="Add this to your watch list"
						onClick={() => {
							setStatusMutation.mutate({
								mediaId: mediaProp.id,
								status: MediaListStatus.Current,
							})
						}}
					>
						<IconWithText
							iconLeft={<BookmarkIcon className="w-5" />}
							text="Watch"
						/>
					</MenuItem>
				) : (
					<>
						<MenuItem
							title="Didn't like it? Drop it"
							onClick={() => {
								setStatusMutation.mutate({
									mediaId: mediaProp.id,
									status: MediaListStatus.Dropped,
								})
							}}
						>
							<IconWithText
								iconLeft={<MinusCircleIcon className="w-5" />}
								text="Drop"
							/>
						</MenuItem>

						<MenuItem
							title="Can't get to it right now? Pause your progress"
							onClick={() => {
								setStatusMutation.mutate({
									mediaId: mediaProp.id,
									status: MediaListStatus.Paused,
								})
							}}
						>
							<IconWithText
								iconLeft={<PauseIcon className="w-5" />}
								text="Pause"
							/>
						</MenuItem>
					</>
				)}

				{externalLinks.map((link) => (
					<MenuItem as={ExternalLink} href={link.url} key={link.id}>
						<IconWithText iconLeft={<ExternalLinkIcon className="w-5" />}>
							<p>{link.site}</p>
							{otherLinkExistsWithSameName(link) && (
								<p className="text-sm leading-tight opacity-75">
									{getDomain(link.url)}
								</p>
							)}
						</IconWithText>
					</MenuItem>
				))}

				<MenuItem
					as={ExternalLink}
					href={media?.siteUrl || `https://anilist.co/anime/${mediaProp.id}`}
				>
					<IconWithText
						iconLeft={<ExternalLinkIcon className="w-5" />}
						text="View on AniList"
					/>
				</MenuItem>
			</MenuPanel>
		</Menu>
	)
}

function getDomain(urlString: string) {
	try {
		// looks prettier without www I guess
		return new URL(urlString).hostname.replace(/^www\./, "")
	} catch {
		return ""
	}
}

function getMobileFriendlyUrl(urlString: string): string {
	const url = new URL(urlString)

	// the funimation mobile app only opens with www.
	if (url.hostname === "funimation.com") {
		url.hostname = "www.funimation.com"
	}

	return url.toString()
}
