import { redirect } from "@remix-run/node"

export function loader() {
  return redirect(
    `https://anilist.co/api/v2/oauth/authorize` +
      `?client_id=${process.env.ANILIST_APP_ID}` +
      `&redirect_uri=${process.env.ANILIST_REDIRECT_URL}` +
      `&response_type=code`
  )
}
