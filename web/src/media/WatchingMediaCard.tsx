import type { WatchingMediaFragment } from "../generated/graphql"
import MediaCardBanner from "./MediaCardBanner"
import MediaNextEipsode from "./MediaNextEipsode"
import WatchingMediaAdvanceProgressButton from "./WatchingMediaAdvanceProgressButton"
import WatchingMediaProgress from "./WatchingMediaProgress"

export default function WatchingMediaCard({
	watchingMedia,
}: {
	watchingMedia: WatchingMediaFragment
}) {
	return (
		<div className="relative flex flex-col overflow-hidden rounded-lg shadow">
			{watchingMedia.media && <MediaCardBanner media={watchingMedia.media} />}

			<div className="flex flex-1 p-2 pl-3 bg-gray-800 rounded-b-lg">
				<div className="flex flex-col flex-1">
					<h3 className="flex-1 text-xl font-light font-condensed">
						{watchingMedia?.media?.title?.userPreferred}
					</h3>
					<div className="flex-1" />
					<div className="pr-6 mt-2 opacity-70">
						<WatchingMediaProgress watchingMedia={watchingMedia} />
						{watchingMedia.media && (
							<MediaNextEipsode media={watchingMedia.media} />
						)}
					</div>
				</div>
			</div>

			<div className="absolute bottom-2 right-2">
				<WatchingMediaAdvanceProgressButton entry={watchingMedia} />
			</div>
		</div>
	)
}
