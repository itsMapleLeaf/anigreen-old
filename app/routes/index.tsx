import { LoaderFunction, MetaFunction, useRouteData } from "remix"

export let meta: MetaFunction = () => {
  return {
    title: "heya",
    description: "yeet",
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
