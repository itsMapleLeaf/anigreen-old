import { DotsVerticalIcon, ExternalLinkIcon } from "@heroicons/react/solid"
import { compact } from "lodash-es"
import Button from "../dom/Button"
import ExternalLink from "../dom/ExternalLink"
import type { MediaFragment } from "../generated/graphql"
import { clearIconButtonStyle } from "../ui/components"
import IconWithText from "../ui/IconWithText"
import { Menu, MenuButton, MenuItem, MenuPanel } from "../ui/menu"

export default function MediaMenu({ media }: { media: MediaFragment }) {
	return (
		<Menu>
			<MenuButton>
				<Button className={clearIconButtonStyle}>
					<DotsVerticalIcon className="w-5" />
				</Button>
			</MenuButton>
			<MenuPanel>
				{compact(media.externalLinks)?.map((link) => (
					<MenuItem key={link.id}>
						<ExternalLink href={link.url}>
							<IconWithText
								iconLeft={<ExternalLinkIcon className="w-5" />}
								text={link.site}
							/>
						</ExternalLink>
					</MenuItem>
				))}
				<MenuItem>
					<ExternalLink href={`https://anilist.co/anime/${media.id}`}>
						<IconWithText
							iconLeft={<ExternalLinkIcon className="w-5" />}
							text="View on AniList"
						/>
					</ExternalLink>
				</MenuItem>
			</MenuPanel>
		</Menu>
	)
}
