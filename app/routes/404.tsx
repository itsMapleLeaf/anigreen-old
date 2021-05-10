import type { MetaFunction } from "remix"

export let meta: MetaFunction = () => {
  return { title: "page not found" }
}

export default function PageNotFound() {
  return (
    <>
      <h1>oops!</h1>
      <p>couldn't find this page :(</p>
    </>
  )
}
