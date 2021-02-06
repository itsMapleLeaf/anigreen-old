import { tw } from "twind"
import { useViewerQuery } from "../generated/graphql"
import { Menu, MenuItem, MenuItems, MenuTrigger } from "../ui/menu"

export default function UserMenuButton() {
	const query = useViewerQuery()
	const avatarUrl = query.data?.Viewer?.avatar?.medium
	return (
		<Menu>
			<MenuTrigger>
				<button
					type="button"
					className={tw`rounded-full w-10 h-10 p-0.5 bg-gradient-to-br from-green-400 to-blue-400`}
					title="User menu"
				>
					{avatarUrl && (
						<img
							src={avatarUrl}
							alt=""
							className={tw`rounded-full w-full h-full`}
						/>
					)}
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
