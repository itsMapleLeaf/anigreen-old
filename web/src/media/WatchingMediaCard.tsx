import type { WatchingMediaFragment } from "../generated/graphql"
import AspectBox from "../ui/AspectBox"
import Image from "../ui/Image"
import MediaMenu from "./MediaMenu"
import MediaNextEipsode from "./MediaNextEipsode"
import WatchingMediaAdvanceProgressButton from "./WatchingMediaAdvanceProgressButton"
import WatchingMediaProgress from "./WatchingMediaProgress"

export default function WatchingMediaCard({
	watchingMedia,
}: {
	watchingMedia: WatchingMediaFragment
}) {
	return (
		<div className="relative flex flex-col rounded-lg shadow">
			<div className="relative p-2 bg-black rounded-t-lg">
				<div className="absolute inset-0 opacity-50">
					<Image
						src={watchingMedia?.media?.bannerImage}
						className="w-full h-full rounded-t-lg"
					/>
				</div>

				<div className="absolute inset-0 p-2 opacity-75 bg-gradient-to-t from-black to-transparent"></div>

				<div className={`w-1/3`}>
					<AspectBox ratio={3 / 4}>
						<Image
							src={watchingMedia.media?.coverImage?.large}
							className="w-full h-full rounded-md shadow"
						/>
					</AspectBox>
				</div>

				{watchingMedia.media && (
					<div className="absolute right-2 bottom-2">
						<MediaMenu media={watchingMedia.media} />
					</div>
				)}
			</div>

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
