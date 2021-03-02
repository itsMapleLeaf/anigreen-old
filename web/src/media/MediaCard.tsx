import { tw } from "twind"
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
		<div tw="relative overflow-hidden rounded-lg shadow flex flex-col">
			<div tw="bg-black p-2 relative">
				<div tw="absolute inset-0 opacity-50">
					<Image src={entry?.media?.bannerImage} tw="w-full h-full" />
				</div>

				<div tw="absolute inset-0 bg-gradient-to-t opacity-75 from-black to-transparent p-2"></div>

				<div className={tw`w-1/3`}>
					<AspectBox ratio={3 / 4}>
						<Image
							src={entry.media?.coverImage?.large}
							tw="w-full h-full rounded-md shadow"
						/>
					</AspectBox>
				</div>

				<div tw="absolute right-2 bottom-2">
					<MediaCardMenu entry={entry} />
				</div>
			</div>

			<div tw="relative flex flex-1 p-2 pl-3 bg-gray-800">
				<div tw="flex flex-col flex-1">
					<h3 tw="font-light text-xl font-condensed flex-1">
						{entry?.media?.title?.userPreferred}
					</h3>
					<div tw="flex-1" />
					<div tw="opacity-70 mt-2 pr-6">
						<MediaCardProgress entry={entry} />
						<MediaCardNextEpisode entry={entry} />
					</div>
				</div>
			</div>

			<div tw="absolute bottom-2 right-2">
				<MediaCardAdvanceProgressButton entry={entry} />
			</div>
		</div>
	)
}
