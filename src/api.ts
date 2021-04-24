import request, { ClientError } from "graphql-request"
import { getSdk, Requester } from "./generated/graphql"

const requester: Requester<{}> = async (document, variables) => {
	try {
		return await request("/anilist", document, variables)
	} catch (error) {
		if (error instanceof ClientError) {
			const message =
				error.response.errors?.[0]?.message || "An API error occurred"

			throw new ApiError(message, error.response.status)
		}

		throw error
	}
}

export class ApiError extends Error {
	status: number

	constructor(message: string, status: number) {
		super(message)
		this.status = status
	}
}

export const api = getSdk(requester)
