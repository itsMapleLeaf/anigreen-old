export default function FluidGrid({ children }: { children: React.ReactNode }) {
	return (
		<div className="grid gap-6 items-start grid-cols-[repeat(auto-fill,minmax(16rem,1fr))]">
			{children}
		</div>
	)
}
