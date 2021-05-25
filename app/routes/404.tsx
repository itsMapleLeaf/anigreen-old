import type { MetaFunction } from "@remix-run/node"
import SystemMessage from "../components/ui/SystemMessage"

export const meta: MetaFunction = () => {
  return { title: "page not found" }
}

export default function PageNotFound() {
  return (
    <SystemMessage title="oops">
      <p>{`couldn't find this page :(`}</p>
    </SystemMessage>
  )
}
