import { useQuery } from "react-query"
import { createSessionQuery, Session } from "./session"

export default function AuthButton() {
	const sessionQuery = useQuery<Session | undefined>(createSessionQuery())

	if (sessionQuery.isLoading) return null
	if (sessionQuery.data) return <a href="/logout">Log out</a>

	return (
		<a
			href={
				`https://anilist.co/api/v2/oauth/authorize` +
				`?client_id=${import.meta.env.VITE_ANILIST_APP_ID}` +
				`&redirect_uri=${import.meta.env.VITE_ANILIST_REDIRECT_URL}` +
				`&response_type=code`
			}
		>
			Login with AniList
		</a>
	)
}
