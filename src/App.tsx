import request, { gql } from "graphql-request"
import { useQuery } from "react-query"
import { tw } from "twind"
import { AnimeQuery } from "./generated/graphql"

export default function App() {
	const query = useQuery<AnimeQuery>("anime", () => {
		return request(
			`https://graphql.anilist.co`,
			gql`
				query Anime($id: Int) {
					Media(id: $id, type: ANIME) {
						id
						title {
							romaji
							english
							native
						}
					}
				}
			`,
			{ id: 116287 },
		)
	})

	return (
		<div className={tw`grid gap-4 h-full`}>
			<header
				className={tw`flex justify-between items-center p-4 bg-gray-800 shadow`}
			>
				<h1 className={tw`text-3xl`}>hi lol</h1>
			</header>
			<main className={tw`mx-auto w-full bg-gray-800 shadow max-w-4xl p-4`}>
				<pre>{JSON.stringify(query.data, null, 2)}</pre>
			</main>
		</div>
	)
}
