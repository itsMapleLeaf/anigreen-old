import { tw } from "twind"
import Button from "../dom/Button"
import ExternalLink from "../dom/ExternalLink"
import type { AnimeListEntryFragment } from "../generated/graphql"
import NyaaSearchDialogButton from "../nyaa/NyaaSearchDialogButton"
import { clearIconButtonStyle } from "../ui/components"
import { DotsVerticalIcon, ExternalLinkIcon, SearchIcon } from "../ui/icons"
import IconWithText from "../ui/IconWithText"
import { Menu, MenuButton, MenuItem, MenuPanel } from "../ui/menu"

export default function MediaCardMenu({
	entry,
}: {
	entry: AnimeListEntryFragment
}) {
	const nyaaSearchQuery =
		entry?.media?.title?.romaji ||
		entry?.media?.title?.english ||
		entry?.media?.title?.native ||
		""

	return (
		<Menu>
			<MenuButton>
				<Button className={tw(clearIconButtonStyle)}>
					<DotsVerticalIcon />
				</Button>
			</MenuButton>
			<MenuPanel>
				<NyaaSearchDialogButton query={nyaaSearchQuery}>
					<MenuItem>
						<Button>
							<IconWithText iconLeft={<SearchIcon />} text="Nyaa Search" />
						</Button>
					</MenuItem>
				</NyaaSearchDialogButton>

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
}
