import { compact, uniq } from "lodash-es"
import React, { ReactNode, useCallback } from "react"
import { tw } from "twind"
import { AppLogoLink } from "./app/AppLogoLink"
import { NavDrawerContent } from "./app/NavDrawerContent"
import { useScrollSelector } from "./dom/useScrollSelector"
import { useAnimeListQuery, useViewerQuery } from "./generated/graphql"
import Button from "./ui/Button"
import Drawer from "./ui/Drawer"
import { MenuIcon, PlusIcon, SearchIcon } from "./ui/icons"
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

						<div className={tw`grid gap-4 py-4`}>
							{list?.entries?.map((entry) => (
								<WatchingAnimeCard
									key={entry?.id}
									englishTitle={entry?.media?.title?.english}
									romajiTitle={entry?.media?.title?.romaji}
									bannerImageUrl={entry?.media?.bannerImage}
									coverImageUrl={entry?.media?.coverImage?.large}
									mediaFormat={entry?.media?.format}
									fields={
										<>
											<CardField
												title="Progress"
												content={formatProgress(
													entry?.progress,
													entry?.media?.episodes,
												)}
											/>
											<CardField
												title="Score"
												content={formatScore(entry?.score)}
											/>
										</>
									}
									footerText={formatNextEpisode(
										entry?.media?.nextAiringEpisode?.episode,
										entry?.media?.nextAiringEpisode?.airingAt,
									)}
									actions={
										<>
											{/* please end me */}
											{(entry?.progress ?? 0) <
											(entry?.media?.nextAiringEpisode?.episode ??
												(entry?.media?.episodes ?? 1) + 1 ??
												0) -
												1 ? (
												<Button label="Add Progress" icon={<PlusIcon />} />
											) : null}
											<Button label="Nyaa Search" icon={<SearchIcon />} />
										</>
									}
								/>
							))}
						</div>
					</div>
				))}

				{animeListQuery.isLoading && <p>Loading...</p>}

				{animeListQuery.isError && <p>An error occured :(</p>}
			</main>
		</>
	)
}

function formatNextEpisode(
	episode?: number | null,
	airingTimeSeconds?: number | null,
) {
	if (episode && airingTimeSeconds) {
		const date = new Date(Number(airingTimeSeconds) * 1000)
		const dateString = date.toLocaleDateString()
		const timeString = date.toLocaleTimeString(undefined, {
			// @ts-expect-error
			timeStyle: "short",
		})
		return `Episode ${episode} airs on ${dateString} at ${timeString}`
	}
}

function formatProgress(progress?: number | null, episodes?: number | null) {
	progress ??= 0
	if (progress === episodes) return "Complete"
	if (episodes == null) return `${progress}`
	return `${progress}/${episodes}`
}

function formatScore(score?: number | null) {
	if (score != null && score > 0) return `${Math.round(score)}/10`
	return "None"
}

function MenuButton({ onClick }: { onClick?: () => void }) {
	return (
		<button type="button" title="Menu" className={tw`p-3`} onClick={onClick}>
			<MenuIcon />
		</button>
	)
}

function WatchingAnimeCard(props: {
	englishTitle?: string | null
	romajiTitle?: string | null
	bannerImageUrl?: string | null
	coverImageUrl?: string | null
	mediaFormat?: string | null
	fields: React.ReactNode
	actions: React.ReactNode
	footerText: React.ReactNode
}) {
	const [title, subtitle] = compact(
		uniq([props.englishTitle, props.romajiTitle]),
	)

	return (
		<div className={tw`relative rounded-lg overflow-hidden shadow bg-gray-800`}>
			<Image
				src={props.bannerImageUrl}
				className={tw`absolute w-full h-full transform scale-110`}
				style={{
					filter: `blur(4px) brightness(0.2)`,
				}}
			/>

			<div className={tw`p-4 relative flex gap-4`}>
				<Image
					className={tw`rounded-md shadow w-36 self-stretch hidden sm:block`}
					src={props.coverImageUrl}
				/>

				<div className={tw`flex-1 flex flex-col space-y-4`}>
					{/* title row */}
					<div className={tw`flex-1`}>
						<p
							className={tw`text-xs uppercase opacity-50 font-medium tracking-wider`}
						>
							{props.mediaFormat}
						</p>
						<h3 className={tw`font-light text-3xl`}>{title}</h3>
						<p className={tw`font-light text-xl opacity-75`}>{subtitle}</p>
					</div>

					{/* fields */}
					<div className={tw`grid grid-flow-col auto-cols-fr flex-1`}>
						{props.fields}
					</div>

					{/* footer text */}
					{props.footerText ? (
						<p className={tw`opacity-70`}>{props.footerText}</p>
					) : null}

					<div className={tw`flex flex-wrap gap-4`}>{props.actions}</div>
				</div>
			</div>
		</div>
	)
}

function CardField(props: { title: ReactNode; content: ReactNode }) {
	return (
		<div className={tw`flex-1`}>
			<h4
				className={tw`text-xs uppercase opacity-50 font-medium tracking-wider`}
			>
				{props.title}
			</h4>
			<p className={tw`text-xl font-light`}>{props.content}</p>
		</div>
	)
}
