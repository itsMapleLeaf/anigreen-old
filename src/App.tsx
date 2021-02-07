import { compact, uniq } from "lodash-es"
import React, { useCallback } from "react"
import { tw } from "twind"
import { AppLogoLink } from "./app/AppLogoLink"
import { NavDrawerContent } from "./app/NavDrawerContent"
import { useScrollSelector } from "./dom/useScrollSelector"
import { useAnimeListQuery, useViewerQuery } from "./generated/graphql"
import Drawer from "./ui/Drawer"
import { MenuIcon } from "./ui/icons"
import Image from "./ui/Image"

export default function App() {
	const viewerId = useViewerQuery().data?.Viewer?.id

	const animeListQuery = useAnimeListQuery(
		{ userId: viewerId! },
		{ enabled: !!viewerId },
	)

	const isAtTop = useScrollSelector(useCallback((scroll) => scroll === 0, []))

	return (
		<>
			<header
				className={tw`
					flex items-center
					shadow
					sticky top-0 z-20
					transition duration-300
					backdrop-blur
					${isAtTop ? `bg-gray-800` : `bg(black opacity-75)`}
				`}
			>
				<Drawer trigger={<MenuButton />}>
					<NavDrawerContent />
				</Drawer>

				<div className={tw`py-2`}>
					<AppLogoLink />
				</div>
			</header>

			<main className={tw`mx-auto max-w-screen-md px-2`}>
				{animeListQuery.data?.MediaListCollection?.lists?.map((list) => (
					<div key={list?.name}>
						<h2 className={tw`font-light text-3xl py-2 z-10`}>{list?.name}</h2>

						<div
							className={tw`grid gap-2 mt-2`}
							style={{
								gridTemplateColumns: `repeat(auto-fill, minmax(12rem, 1fr))`,
							}}
						>
							{list?.entries?.map((entry) => {
								const titles = compact(
									uniq([
										entry?.media?.title?.english,
										entry?.media?.title?.romaji,
									]),
								)

								return (
									<div
										key={entry?.id}
										className={tw`relative shadow`}
										style={{
											backgroundColor:
												entry?.media?.coverImage?.color || undefined,
										}}
									>
										<Image
											className={tw`w-full object-cover`}
											style={{ aspectRatio: "3/4" }}
											src={entry?.media?.coverImage?.large || ""}
										/>
										<div
											className={tw`absolute inset-x-0 bottom-0 bg(black opacity-75) p-2 backdrop-blur`}
										>
											<h3 className={tw`font-light`}>{titles[0]}</h3>
											{titles[1] && (
												<p className={tw`font-light text-sm opacity-75`}>
													{titles[1]}
												</p>
											)}
										</div>
									</div>
								)
							})}
						</div>
					</div>
				))}

				{animeListQuery.isLoading && <p>Loading...</p>}

				{animeListQuery.isError && <p>An error occured :(</p>}
			</main>
		</>
	)
}

function MenuButton({ onClick }: { onClick?: () => void }) {
	return (
		<button type="button" title="Menu" className={tw`p-3`} onClick={onClick}>
			<MenuIcon />
		</button>
	)
}
