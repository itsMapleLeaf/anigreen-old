import { useQuery } from "react-query"
import UserMenuButton from "./UserMenuButton"

export default function AuthButton() {
	const sessionQuery = useQuery<{ authenticated: boolean }>({
		queryKey: "session",
		queryFn: () => fetch("/session").then((res) => res.json()),
	})

	if (sessionQuery.isLoading) return null

	if (sessionQuery.data?.authenticated) {
		return <UserMenuButton />
	}

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
