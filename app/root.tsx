import { Outlet } from "react-router-dom"
import type { LinksFunction, LoaderFunction } from "remix"
import { Links, LiveReload, Meta, Scripts, useRouteData } from "remix"
import tailwindStyles from "./styles/tailwind.css"

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStyles }]
}

export let loader: LoaderFunction = async () => {
  return { date: new Date() }
}

function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-gray-900 text-gray-50">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.png" type="image/png" />
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

export default function App() {
  let data = useRouteData<{ date: string }>()
  return (
    <Document>
      <h1>ayy lmao</h1>
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
