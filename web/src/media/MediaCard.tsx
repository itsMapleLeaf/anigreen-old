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
		<div className="relative flex flex-col rounded-lg shadow">
			<div className="relative p-2 bg-black rounded-t-lg">
				<div className="absolute inset-0 opacity-50">
					<Image
						src={entry?.media?.bannerImage}
						className="w-full h-full rounded-t-lg"
					/>
				</div>

				<div className="absolute inset-0 p-2 opacity-75 bg-gradient-to-t from-black to-transparent"></div>

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

			<div className="flex flex-1 p-2 pl-3 bg-gray-800 rounded-b-lg">
				<div className="flex flex-col flex-1">
					<h3 className="flex-1 text-xl font-light font-condensed">
						{entry?.media?.title?.userPreferred}
					</h3>
					<div className="flex-1" />
					<div className="pr-6 mt-2 opacity-70">
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
