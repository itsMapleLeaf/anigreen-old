import { LoaderFunction, MetaFunction, useRouteData } from "remix"

export let meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!",
  }
}

export let loader: LoaderFunction = async () => {
  return { message: "hi lol" }
}

export default function Index() {
  const data = useRouteData<{ message: string }>()
  return (
    <div>
      <p>{data.message}</p>
    </div>
  )
}
