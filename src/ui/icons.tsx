import { cloneElement, ReactElement, SVGProps } from "react"
import { apply, tw } from "twind"

const createIconComponent = (element: ReactElement) => (
	props: SVGProps<SVGSVGElement>,
) => cloneElement(element, { className: tw(apply`w-6`, props.className) })

export const BookmarkIcon = createIconComponent(
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		fill="currentColor"
	>
		<path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
	</svg>,
)

export const PlayIcon = createIconComponent(
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		fill="currentColor"
	>
		<path
			fillRule="evenodd"
			d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
			clipRule="evenodd"
		/>
	</svg>,
)

export const SearchIcon = createIconComponent(
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 20"
		fill="currentColor"
		className={tw`w-6`}
	>
		<path
			fillRule="evenodd"
			d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
			clipRule="evenodd"
		/>
	</svg>,
)

export const MenuIcon = createIconComponent(
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		className={tw`w-6`}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M4 6h16M4 12h16M4 18h16"
		/>
	</svg>,
)
