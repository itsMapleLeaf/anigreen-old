import type { LoaderFunction } from "@remix-run/node"
import { redirect } from "@remix-run/node"
import React from "react"
import { clearSession } from "../components/session"
import LoadingPlaceholder from "../components/ui/LoadingPlaceholder"

export const loader: LoaderFunction = () => {
  return redirect("/", {
    headers: {
      "Set-Cookie": clearSession(),
    },
  })
}

export default function Logout() {
  return <LoadingPlaceholder />
}
