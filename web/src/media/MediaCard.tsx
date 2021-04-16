import type { AnimeListEntryFragment } from "../generated/graphql"
import AspectBox from "../ui/AspectBox"
import Image from "../ui/Image"
import MediaCardAdvanceProgressButton from "./MediaCardAdvanceProgressButton"
import MediaCardMenu from "./MediaCardMenu"
import MediaCardNextEpisode from "./MediaCardNextEpisode"
import MediaCardProgress from "./MediaCardProgress"

export default function MediaCard({
	entry,
}: {
	entry: AnimeListEntryFragment
}) {
	return (
		<div className="relative overflow-hidden rounded-lg shadow flex flex-col">
			<div className="bg-black p-2 relative">
				<div className="absolute inset-0 opacity-50">
					<Image src={entry?.media?.bannerImage} className="w-full h-full" />
				</div>

				<div className="absolute inset-0 bg-gradient-to-t opacity-75 from-black to-transparent p-2"></div>

				<div className={`w-1/3`}>
					<AspectBox ratio={3 / 4}>
						<Image
							src={entry.media?.coverImage?.large}
							className="w-full h-full rounded-md shadow"
						/>
					</AspectBox>
				</div>

				<div className="absolute right-2 bottom-2">
					<MediaCardMenu entry={entry} />
				</div>
			</div>

			<div className="relative flex flex-1 p-2 pl-3 bg-gray-800">
				<div className="flex flex-col flex-1">
					<h3 className="font-light text-xl font-condensed flex-1">
						{entry?.media?.title?.userPreferred}
					</h3>
					<div className="flex-1" />
					<div className="opacity-70 mt-2 pr-6">
						<MediaCardProgress entry={entry} />
						<MediaCardNextEpisode entry={entry} />
					</div>
				</div>
			</div>

			<div className="absolute bottom-2 right-2">
				<MediaCardAdvanceProgressButton entry={entry} />
			</div>
		</div>
	)
}
