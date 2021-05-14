import { PlusIcon } from "@heroicons/react/solid"
import { WatchingMediaFragment } from "../../graphql"
import Button from "../dom/Button"
import { clearIconButtonStyle } from "../ui/components"
import { useMediaProgress } from "./useMediaProgress"

export default function WatchingMediaAdvanceProgressButton({
  mediaListEntry,
}: {
  mediaListEntry: WatchingMediaFragment
}) {
  const { isCaughtUp, advanceProgress } = useMediaProgress(mediaListEntry)

  if (isCaughtUp) {
    return null
  }

  return (
    <Button className={clearIconButtonStyle} onClick={advanceProgress}>
      <span className="sr-only">Advance Progress</span>
      <PlusIcon className="w-5" />
    </Button>
  )
}
