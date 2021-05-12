import { Links, LiveReload, Meta, Scripts } from "@remix-run/react"
import React from "react"
import { Outlet } from "react-router-dom"
import { createClient } from "./api"
import AppHeader from "./components/app/AppHeader"
import AppHeaderContainer from "./components/app/AppHeaderContainer"
import { ViewerDocument } from "./graphql"
import { LoaderArgs, useRouteDataTyped } from "./loader"
import tailwindStyles from "./styles/tailwind.css"

export function links() {
  return [{ rel: "stylesheet", href: tailwindStyles }]
}

export async function loader({ request }: LoaderArgs) {
  const response = await createClient(request).fetch({
    query: ViewerDocument,
  })

  if (response.status === 401) {
    return response.json()
  }

  return response
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  )
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document>
      <h1 className="text-2xl font-condensed">oops! something went wrong :(</h1>
      <pre>{error.message}</pre>
    </Document>
  )
}

function Document({ children }: { children: React.ReactNode }) {
  const { data } = useRouteDataTyped<typeof loader>()

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
        <div className="h-screen pt-16 isolate">
          <AppHeaderContainer>
            <header className="max-w-5xl px-4 mx-auto">
              <AppHeader viewer={data?.Viewer} />
            </header>
          </AppHeaderContainer>
          <main className="w-full max-w-5xl min-h-full px-4 py-6 mx-auto">
            {children}
          </main>
        </div>
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  )
}
