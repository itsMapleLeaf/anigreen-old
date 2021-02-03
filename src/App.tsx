import { tw } from "twind"

export default function App() {
	return (
		<div className={tw`grid gap-4 h-full`}>
			<header
				className={tw`flex justify-between items-center p-4 bg-gray-800 shadow`}
			>
				<h1 className={tw`text-3xl`}>hi lol</h1>
			</header>
			<main className={tw`mx-auto w-full bg-gray-800 shadow max-w-4xl`}>
				xd!
			</main>
		</div>
	)
}
