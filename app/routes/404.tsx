import type { MetaFunction } from "@remix-run/node"

export let meta: MetaFunction = () => {
  return { title: "page not found" }
}

export default function PageNotFound() {
  return (
    <div className="grid gap-4">
      <h1 className="text-4xl font-condensed">oops</h1>
      <p>couldn't find this page :(</p>
    </div>
  )
}
