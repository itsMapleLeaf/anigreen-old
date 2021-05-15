import { ReactNode } from "react"

export default function SystemMessage({
  title,
  children,
}: {
  title: ReactNode
  children: ReactNode
}) {
  return (
    <div className="grid gap-4">
      <h1 className="text-4xl font-condensed">{title}</h1>
      {children}
    </div>
  )
}
