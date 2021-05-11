import React from "react"
import { Outlet } from "react-router-dom"
import {
  Links,
  LinksFunction,
  LiveReload,
  LoaderFunction,
  Meta,
  Scripts,
  useRouteData,
} from "remix"
import AppHeader from "./components/app/AppHeader"
import AppHeaderContainer from "./components/app/AppHeaderContainer"
import { parseSession } from "./components/session"
import tailwindStyles from "./styles/tailwind.css"

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStyles }]
}

export const loader: LoaderFunction = async ({ request }) => {
  const query = /* GraphQL */ `
    query Viewer {
      Viewer {
        id
        name
        avatar {
          medium
          large
        }
        bannerImage
        siteUrl
      }
    }
  `

  const session = parseSession(request.headers.get("cookie"))

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "Accept": "application/json",
  }

  if (session?.accessToken) {
    headers.Authorization = `Bearer ${session.accessToken}`
  }

  const res = await fetch(`https://graphql.anilist.co`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
    }),
  })
  if (res.status === 401) {
    return res.json()
  }
  return res
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
  const data = useRouteData()

  return (
    <html lang="en" className="bg-gray-900 text-gray-50">
      <head>
        <meta charSet="utf-8" />
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
              <AppHeader viewer={data.data?.Viewer} />
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
