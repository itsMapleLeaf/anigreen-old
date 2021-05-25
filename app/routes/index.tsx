import type { LoaderFunction } from "@remix-run/node"
import { redirect } from "@remix-run/node"
import { parseSession } from "../components/session"
import LoadingPlaceholder from "../components/ui/LoadingPlaceholder"

export const loader: LoaderFunction = async ({ request }) => {
  const session = parseSession(request.headers.get("Cookie"))
  return redirect(session ? "/watching" : "/schedule")
}

export default function Index() {
  return <LoadingPlaceholder />
}
