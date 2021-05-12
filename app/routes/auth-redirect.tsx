import { LoaderFunction, redirect } from "@remix-run/node"
import { serializeSession } from "../components/session"
import LoadingPlaceholder from "../components/ui/LoadingPlaceholder"

type AnilistTokenResponse = {
  access_token: string
  expires_in: number
}

export const loader: LoaderFunction = async ({ request }) => {
  const code = new URL(request.url).searchParams.get("code")

  const body = {
    grant_type: "authorization_code",
    client_id: process.env.ANILIST_APP_ID,
    client_secret: process.env.ANILIST_APP_SECRET,
    redirect_uri: process.env.ANILIST_REDIRECT_URL,
    code,
  }

  const response = await fetch("https://anilist.co/api/v2/oauth/token", {
    method: "post",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  })
  const data: AnilistTokenResponse = await response.json()
  const expiresAt = Date.now() + data.expires_in * 1000

  return redirect("/", {
    headers: {
      "Set-Cookie": serializeSession({
        accessToken: data.access_token,
        expiresAt,
      }),
    },
  })
}

export default function AuthRedirect() {
  return <LoadingPlaceholder />
}
