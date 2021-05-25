import { IdProvider } from "@radix-ui/react-id"
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  usePendingLocation,
} from "@remix-run/react"
import React from "react"
import { Outlet } from "react-router-dom"
import { createClient } from "./api"
import AppHeader from "./components/app/AppHeader"
import AppHeaderContainer from "./components/app/AppHeaderContainer"
import LoadingPlaceholder from "./components/ui/LoadingPlaceholder"
import SystemMessage from "./components/ui/SystemMessage"
import { ViewerDocument } from "./graphql"
import type { LoaderArgs } from "./remix-helpers"
import { useRouteDataTyped } from "./remix-helpers"
import tailwindStyles from "./styles/tailwind.css"
import { json } from "./typed-response"

export function links() {
  return [{ rel: "stylesheet", href: tailwindStyles }]
}

export async function loader({ request }: LoaderArgs) {
  const response = await createClient(request).fetch({ query: ViewerDocument })

  // if we're unauthorized, treat it as a 200
  if (response.status === 401) {
    return json({ data: undefined }, { status: 200 })
  }

  return response
}

export default function App() {
  const { data } = useRouteDataTyped<typeof loader>()
  return (
    <Document>
      <IdProvider>
        <div className="h-screen pt-16 isolate">
          <AppHeaderContainer>
            <header className="max-w-5xl px-4 mx-auto">
              <AppHeader viewer={data?.Viewer} />
            </header>
          </AppHeaderContainer>
          <main className="w-full max-w-5xl min-h-full px-4 pt-6 pb-12 mx-auto">
            <Outlet />
          </main>
        </div>
        <LoadingCover />
      </IdProvider>
    </Document>
  )
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document>
      <div className="p-4">
        <SystemMessage title="oops! something went wrong :(">
          <pre className="overflow-x-auto">{error.stack || error.message}</pre>
        </SystemMessage>
      </div>
    </Document>
  )
}

function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-gray-900 text-gray-50">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          href="https://fonts.googleapis.com/css?family=Fira+Sans:400,500,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Fira+Sans+Condensed:300"
          rel="stylesheet"
        />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  )
}

function LoadingCover() {
  const pending = usePendingLocation()
  return (
    <div
      className={`fixed inset-0 grid bg-black bg-opacity-75 place-items-center transition-opacity duration-300 ${
        pending ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <LoadingPlaceholder />
    </div>
  )
}
