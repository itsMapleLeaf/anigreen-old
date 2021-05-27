import type { LoaderFunction } from "@remix-run/node"
import { redirect } from "@remix-run/node"
import React from "react"
import LoadingPlaceholder from "../components/ui/LoadingPlaceholder"
import { clearSession } from "../session"

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
