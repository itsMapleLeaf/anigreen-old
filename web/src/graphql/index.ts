/**
 * GQLESS: You can safely modify this file and Query Fetcher based on your needs
 */

import { createReactClient } from "@gqless/react"
import { createClient, QueryFetcher } from "gqless"
import {
	generatedSchema,
	GeneratedSchema,
	scalarsEnumsHash,
	SchemaObjectTypes,
	SchemaObjectTypesNames,
} from "./schema.generated"

const queryFetcher: QueryFetcher = async function (query, variables) {
	const response = await fetch("/anilist", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query,
			variables,
		}),
		credentials: "include",
	})

	const json = await response.json()

	if (json.errors) {
		const message = json.errors?.[0]?.message || "An API error occurred"
		throw new ApiError(message, response.status)
	}

	return json
}

export const client = createClient<
	GeneratedSchema,
	SchemaObjectTypesNames,
	SchemaObjectTypes
>({
	schema: generatedSchema,
	scalarsEnumsHash,
	queryFetcher,
})

export const {
	query,
	mutation,
	mutate,
	subscription,
	resolved,
	refetch,
} = client

export const {
	graphql,
	useQuery,
	usePaginatedQuery,
	useTransactionQuery,
	useLazyQuery,
	useRefetch,
	useMutation,
	useMetaState,
	prepareReactRender,
	useHydrateCache,
	prepareQuery,
} = createReactClient<GeneratedSchema>(client, {
	defaults: {
		// Set this flag as "true" if your usage involves React Suspense
		// Keep in mind that you can overwrite it in a per-hook basis
		suspense: true,

		// Set this flag based on your needs
		staleWhileRevalidate: true,
	},
})

export class ApiError extends Error {
	status: number

	constructor(message: string, status: number) {
		super(message)
		this.status = status
	}
}

export * from "./schema.generated"
