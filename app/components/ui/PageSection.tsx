import type { ReactNode } from "react"
import PageSectionHeading from "./PageSectionHeading"

export default function PageSection({
  title,
  subtitle,
  children,
}: {
  title: ReactNode
  subtitle?: ReactNode
  children: ReactNode
}) {
  return (
    <section className="grid gap-3">
      <PageSectionHeading title={title} subtitle={subtitle} />
      {children}
    </section>
  )
}
