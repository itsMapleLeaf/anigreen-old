import { Outlet } from "react-router-dom"
import { Links, LinksFunction, LiveReload, Meta, Scripts } from "remix"
import tailwindStyles from "./styles/tailwind.css"

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStyles }]
}

function Document({ children }: { children: React.ReactNode }) {
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
        {children}
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  )
}

export default function App() {
  return (
    <Document>
      <h1>ayy lmao it's app</h1>
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
