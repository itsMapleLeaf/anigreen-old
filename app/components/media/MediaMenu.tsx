import {
  BookmarkIcon,
  DotsVerticalIcon,
  ExternalLinkIcon,
  MinusCircleIcon,
  PauseIcon,
} from "@heroicons/react/solid"
import type { ExternalLinkFragment, MediaFragment } from "../../graphql"
import { MediaListStatus } from "../../graphql"
import ExternalLink from "../dom/ExternalLink"
import { isTruthy } from "../helpers/isTruthy"
import { clearIconButtonStyle } from "../ui/components"
import IconWithText from "../ui/IconWithText"
import { Menu, MenuButton, MenuItem, MenuPanel } from "../ui/menu"

export default function MediaMenu({ media }: { media: MediaFragment }) {
  const { status: watchingStatus, setStatus } = useWatchingStatus()

  const externalLinks =
    media?.externalLinks?.filter(isTruthy).map((link) => ({
      ...link,
      url: getMobileFriendlyUrl(link.url),
    })) ?? []

  function otherLinkExistsWithSameName(link: ExternalLinkFragment) {
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
              setStatus(MediaListStatus.Current)
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
                setStatus(MediaListStatus.Dropped)
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
                setStatus(MediaListStatus.Paused)
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
          href={media?.siteUrl || `https://anilist.co/anime/${media.id}`}
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

function useWatchingStatus() {
  /* const client = useQueryClient()

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
	}) */

  const status = MediaListStatus.Current
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  const setStatus = (status: MediaListStatus) => {}
  return { status, setStatus }
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
