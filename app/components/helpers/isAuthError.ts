import { FetchDataError } from "../network/fetchData"

export function isAuthError(error: unknown) {
	return error instanceof FetchDataError && error.status === 401
}
