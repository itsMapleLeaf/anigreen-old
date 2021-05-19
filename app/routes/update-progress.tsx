import { redirect } from "@remix-run/node"
import { Link } from "react-router-dom"
import { createClient } from "../api"
import SystemMessage from "../components/ui/SystemMessage"
import { SetProgressDocument } from "../graphql"
import { ActionArgs } from "../remix-helpers"

export async function action({ request }: ActionArgs) {
  const body = new URLSearchParams(await request.text())

  // TODO: validate or typecheck this somehow
  const mediaListEntryId = Number(body.get("mediaListEntryId"))
  const progress = Number(body.get("progress"))

  await createClient(request).fetch({
    query: SetProgressDocument,
    variables: {
      mediaListEntryId,
      progress,
    },
  })

  return redirect("/watching")
}

export default function UpdateProgress() {
  return (
    <SystemMessage title="oOoOoOoOo">
      <p>
        you found a mysterious place...{" "}
        <Link to="/" className="underline">
          click here to go someplace safer
        </Link>
      </p>
    </SystemMessage>
  )
}
