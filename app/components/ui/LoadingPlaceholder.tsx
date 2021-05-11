import LoadingIcon from "./LoadingIcon"

export default function LoadingPlaceholder() {
  return (
    <div className="grid h-64 place-content-center">
      <LoadingIcon className="w-12 h-12" />
      <p className="sr-only">Loading...</p>
    </div>
  )
}
