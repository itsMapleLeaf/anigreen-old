import React, { Suspense } from "react"
import LoadingPlaceholder from "./LoadingPlaceholder"

export default function LoadingSuspense({
  children,
}: {
  children: React.ReactNode
}) {
  return <Suspense fallback={<LoadingPlaceholder />}>{children}</Suspense>
}
