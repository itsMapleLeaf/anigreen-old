import type { MediaFragment } from "../generated/graphql"
import AspectBox from "../ui/AspectBox"
import Image from "../ui/Image"
import MediaMenu from "./MediaMenu"

export default function MediaCardBanner({ media }: { media: MediaFragment }) {
	return (
		<div
			className="relative p-2"
			style={{ backgroundColor: media.coverImage?.color }}
		>
			{media.bannerImage && (
				<div className="absolute inset-0 bg-black">
					{/* can't apply opacity directly to image lol */}
					<div className="h-full opacity-75">
						<Image
							src={media.bannerImage}
							className="w-full h-full rounded-t-lg"
						/>
					</div>
				</div>
			)}

			<div className="absolute inset-0 p-2 opacity-75 bg-gradient-to-t from-black to-transparent"></div>

			<div className="w-1/3">
				<AspectBox ratio={3 / 4}>
					<Image
						src={
							media.coverImage?.medium ??
							media.coverImage?.large ??
							media.coverImage?.extraLarge
						}
						className="w-full h-full rounded-md shadow"
					/>
				</AspectBox>
			</div>

			{/* we might need to move this out */}
			<div className="absolute right-2 bottom-2">
				<MediaMenu media={media} />
			</div>
		</div>
	)
}
