import { compact } from "lodash-es"
import { useCallback } from "react"
import { tw } from "twind"
import { useScrollSelector } from "../dom/useScrollSelector"
import { useAnimeListQuery, useViewerQuery } from "../generated/graphql"
import SectionedMediaCardList from "../media/SectionedMediaCardList"
import { clearIconButtonStyle } from "../ui/components"
import Drawer from "../ui/Drawer"
import { MenuIcon } from "../ui/icons"
import QueryRenderer from "../ui/QueryRenderer"
import { AppLogoLink } from "./AppLogoLink"
import { NavDrawerContent } from "./NavDrawerContent"

export default function App() {
	const viewerId = useViewerQuery().data?.Viewer?.id

	const animeListQuery = useAnimeListQuery(
		{ userId: viewerId! },
		{ enabled: !!viewerId },
	)

	const isAtTop = useScrollSelector(useCallback((scroll) => scroll === 0, []))

	return (
		<div style={{ isolation: "isolate" }}>
			<header
				className={tw`
					sticky top-0 z-10
					flex items-center space-x-2 px-2
					transition duration-300
					shadow backdrop-blur
					${isAtTop ? `bg-gray-800` : `bg(black opacity-75)`}
				`}
			>
				<Drawer
					trigger={
						<button
							type="button"
							title="Menu"
							className={tw(clearIconButtonStyle)}
						>
							<MenuIcon className={tw`w-6`} />
						</button>
					}
				>
					<NavDrawerContent />
				</Drawer>

				<div className={tw`py-2`}>
					<AppLogoLink />
				</div>
			</header>

			<main className={tw`mx-auto max-w-screen-xl grid gap-8 px-4 py-6`}>
				<QueryRenderer
					{...animeListQuery}
					renderData={(data) => (
						<SectionedMediaCardList
							entries={compact(
								data?.MediaListCollection?.lists?.flatMap(
									(list) => list?.entries,
								),
							)}
						/>
					)}
				/>
			</main>
		</div>
	)
}
