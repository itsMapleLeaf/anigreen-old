export class AnilistError extends Error {
	errors

	constructor(
		status: number,
		errors: readonly { status: number; message: string }[],
	) {
		super(`Api request failed with status ${status}`)
		this.errors = errors
	}
}
