import { tw } from "twind"
import { useAnilistQuery } from "../anilist"
import { UserButtonQuery } from "../generated/graphql"
import { gql } from "../gql"
import { Menu, MenuItem, MenuItems, MenuTrigger } from "../ui/menu"

export default function UserMenuButton() {
	const query = useAnilistQuery<UserButtonQuery>({
		queryKey: "userButton",
		query: gql`
			query UserButton {
				Viewer {
					avatar {
						medium
					}
				}
			}
		`,
	})

	const avatarUrl = query.data?.Viewer?.avatar?.medium
	return (
		<Menu>
			<MenuTrigger>
				<button type="button">
					{avatarUrl ? (
						<img src={avatarUrl} className={tw`rounded-full w-8 h-8`} />
					) : null}
				</button>
			</MenuTrigger>
			<MenuItems>
				<MenuItem>
					<button type="button">Profile</button>
				</MenuItem>
				<MenuItem>
					<button type="button">Settings</button>
				</MenuItem>
				<MenuItem>
					<a href="/logout">Log Out</a>
				</MenuItem>
			</MenuItems>
		</Menu>
	)
}
