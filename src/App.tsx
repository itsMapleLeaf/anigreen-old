import { compact, uniq } from "lodash-es"
import React, { useCallback } from "react"
import { tw } from "twind"
import AuthButton from "./auth/AuthButton"
import { useScrollSelector } from "./dom/useScrollSelector"
import { useAnimeListQuery, useViewerQuery } from "./generated/graphql"

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
					flex justify-between items-center
					p-4
					shadow
					sticky top-0 z-20
					transition duration-300
					${isAtTop ? `bg-gray-800` : `bg(black opacity-75)`}
				`}
				style={{
					backdropFilter: `blur(4px)`,
				}}
			>
				<a href="/">
					<h1 className={tw`text-3xl leading-none mb-1`}>
						<span className={tw`text-blue-300`}>ani</span>
						<span className={tw`text-green-300`}>green</span>
					</h1>
					<p className={tw`text-sm opacity-50`}>name pending</p>
				</a>
				<AuthButton />
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
										className={tw`relative shadow rounded overflow-hidden`}
									>
										<img
											className={tw`w-full object-cover`}
											alt=""
											style={{
												aspectRatio: "3/4",
												backgroundColor: `${entry?.media?.coverImage?.color}`,
											}}
											src={entry?.media?.coverImage?.large || ""}
											loading="lazy"
										/>
										<div
											className={tw`absolute inset-x-0 bottom-0 bg(black opacity-75) p-2`}
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
