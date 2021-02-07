import { tw } from "twind"

export function AppLogoLink() {
	return (
		<a href="/" className={tw`space-y-1`}>
			<h1 className={tw`text-3xl leading-none`}>
				<span className={tw`text-blue-300`}>ani</span>
				<span className={tw`text-green-300`}>green</span>
			</h1>
			<p className={tw`text-sm opacity-50`}>name pending</p>
		</a>
	)
}
