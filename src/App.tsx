import { tw } from "twind"
import { useAnilistQuery } from "./anilist"
import AuthButton from "./auth/AuthButton"
import { AnimeQuery } from "./generated/graphql"
import { gql } from "./gql"

export default function App() {
	const query = useAnilistQuery<AnimeQuery>({
		queryKey: "anime",
		variables: { id: 116287 },
		query: gql`
			query Anime($id: Int) {
				Media(id: $id, type: ANIME) {
					id
					title {
						romaji
						english
						native
					}
				}
				Viewer {
					id
					name
					avatar {
						medium
					}
				}
			}
		`,
	})

	return (
		<div className={tw`space-y-4`}>
			<header
				className={tw`flex justify-between items-center p-4 bg-gray-800 shadow`}
			>
				<h1 className={tw`text-3xl`}>hi lol</h1>
				<AuthButton />
			</header>
			<main className={tw`mx-auto w-full bg-gray-800 shadow max-w-4xl p-4`}>
				<pre className={tw`overflow-x-auto`}>
					{JSON.stringify(query.data, null, 2)}
				</pre>
			</main>
		</div>
	)
}
