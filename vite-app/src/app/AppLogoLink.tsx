import { Link } from "react-router-dom"

export default function AppLogoLink() {
	return (
		<Link to="/" className="space-y-1">
			<h1 className="text-3xl leading-none">
				<span className="text-blue-300">ani</span>
				<span className="text-green-300">green</span>
			</h1>
			<p className="text-sm opacity-50">name pending</p>
		</Link>
	)
}
