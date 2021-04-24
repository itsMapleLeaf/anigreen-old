import type { ReactNode } from "react"
import type { MediaFragment } from "../generated/graphql"
import MediaCardBanner from "./MediaCardBanner"

export default function MediaCard({
	media,
	children,
}: {
	media: MediaFragment
	children: ReactNode
}) {
	return (
		<div className="relative flex flex-col overflow-hidden rounded-lg shadow">
			<MediaCardBanner media={media} />
			<div className="flex flex-1 p-2 pl-3 bg-gray-800 rounded-b-lg">
				<div className="flex flex-col flex-1">
					<h3 className="flex-1 text-xl font-light font-condensed">
						{media.title?.userPreferred}
					</h3>
					{children}
				</div>
			</div>
		</div>
	)
}
