import type { Media } from "../graphql"
import MediaCardBanner from "./MediaCardBanner"
import MediaNextEipsode from "./MediaNextEipsode"

export default function MediaCard({ media }: { media: Media }) {
	return (
		<div className="relative flex flex-col overflow-hidden rounded-lg shadow">
			<MediaCardBanner media={media} />
			<div className="flex flex-1 p-2 pl-3 bg-gray-800 rounded-b-lg">
				<div className="flex flex-col flex-1">
					<h3 className="flex-1 text-xl font-light font-condensed">
						{media.title?.userPreferred}
					</h3>
					<div className="flex-1" />
					<div className="pr-6 mt-2 opacity-70">
						<MediaNextEipsode media={media} />
					</div>
				</div>
			</div>
		</div>
	)
}
