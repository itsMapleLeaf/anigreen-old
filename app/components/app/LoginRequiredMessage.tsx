import { solidButtonStyle } from "../ui/components"

export default function LoginRequiredMessage() {
  return (
    <div className="text-center grid gap-4 px-4 py-8 place-items-center">
      <h1 className="font-condensed text-3xl">hey!</h1>
      <p>you need to log in to see this page!</p>
      <a href="/login" className={solidButtonStyle}>
        log in with AniList
      </a>
    </div>
  )
}
