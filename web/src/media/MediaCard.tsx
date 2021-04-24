import { startCase } from "lodash-es"
import type { ReactNode } from "react"
import type { MediaFragment } from "../generated/graphql"
import Tooltip from "../ui/Tooltip"
import MediaCardBanner from "./MediaCardBanner"

export default function MediaCard({
	media,
	children,
}: {
	media: MediaFragment
	children: ReactNode
}) {
	return (
		<div className="relative overflow-hidden rounded-lg shadow">
			<MediaCardBanner media={media} />
			<div className="px-2 pt-3 pb-2 pl-3 bg-gray-800 rounded-b-lg">
				<Tooltip text={media.title?.userPreferred ?? ""}>
					<h3 className="mb-1 text-2xl font-light font-condensed line-clamp-2">
						{media.title?.userPreferred}
					</h3>
				</Tooltip>
				<p className="mb-2 text-sm font-medium uppercase opacity-75">
					{startCase(media.format)}
				</p>
				{children}
			</div>
		</div>
	)
}
