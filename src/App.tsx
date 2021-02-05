import { tw } from "twind"
import { useAnilistQuery } from "./anilist"
import AuthButton from "./auth/AuthButton"
import {
	AnimeListQuery,
	AnimeListQueryVariables,
	ViewerQuery,
} from "./generated/graphql"
import { gql } from "./gql"
import { unique } from "./helpers/unique"

export default function App() {
	const viewerQuery = useAnilistQuery<ViewerQuery>({
		queryKey: "viewer",
		query: gql`
			query Viewer {
				Viewer {
					id
				}
			}
		`,
	})

	const animeListQuery = useAnilistQuery<
		AnimeListQuery,
		AnimeListQueryVariables
	>({
		queryKey: "anime",
		variables: { userId: viewerQuery.data?.Viewer?.id! },
		enabled: !!viewerQuery.data?.Viewer?.id,
		query: gql`
			query AnimeList($userId: Int!) {
				MediaListCollection(userId: $userId, type: ANIME, sort: STATUS) {
					lists {
						name
						status
						entries {
							id
							media {
								title {
									english
									romaji
									native
								}
								coverImage {
									extraLarge
									large
									color
								}
								bannerImage
							}
						}
					}
				}
			}
		`,
	})

	return (
		<>
			<header
				className={tw`flex justify-between items-center p-4 bg-gray-800 shadow sticky top-0 h-20 z-20`}
			>
				<h1 className={tw`text-3xl`}>hi lol</h1>
				<AuthButton />
			</header>

			<main className={tw`mx-auto max-w-screen-md px-2`}>
				{animeListQuery.data?.MediaListCollection?.lists?.map((list) => (
					<div key={list?.name}>
						<h2 className={tw`font-light text-3xl py-2 z-10`}>{list?.name}</h2>

						<div className={tw`grid gap-2 mt-2`}>
							{list?.entries?.map((entry) => {
								const titles = unique([
									entry?.media?.title?.english,
									entry?.media?.title?.romaji,
								]).filter(Boolean)

								return (
									<div
										key={entry?.id}
										className={tw`relative shadow rounded overflow-hidden`}
									>
										<img
											className={tw`w-full object-cover`}
											alt=""
											style={{
												aspectRatio: "2.2/1",
												backgroundColor: `${entry?.media?.coverImage?.color}`,
											}}
											src={
												entry?.media?.bannerImage ||
												entry?.media?.coverImage?.extraLarge ||
												""
											}
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
