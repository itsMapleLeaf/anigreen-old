import { DotsVerticalIcon, ExternalLinkIcon } from "@heroicons/react/solid"
import { compact } from "lodash-es"
import ExternalLink from "../dom/ExternalLink"
import type {
	MediaExternalLinkFragment,
	MediaFragment,
} from "../generated/graphql"
import { clearIconButtonStyle } from "../ui/components"
import IconWithText from "../ui/IconWithText"
import { Menu, MenuButton, MenuItem, MenuPanel } from "../ui/menu"

export default function MediaMenu({ media }: { media: MediaFragment }) {
	const externalLinks = compact(media.externalLinks).map((link) => ({
		...link,
		url: getMobileFriendlyUrl(link.url),
	}))

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
					href={media.siteUrl || `https://anilist.co/anime/${media.id}`}
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
