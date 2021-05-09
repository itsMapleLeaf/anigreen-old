import {
	useInfiniteQuery,
	UseInfiniteQueryOptions,
	UseQueryOptions,
} from "react-query"
import { fetchData } from "./fetchData"

// https://github.com/dotansimha/graphql-code-generator/issues/5212#issuecomment-823536072
type UseQueryFn<
	TData extends Record<string, any>,
	TVariables extends Record<string, any>
> = {
	(variables: TVariables, options?: UseQueryOptions<TData>): unknown
	document: string
	getKey: (variables: TVariables) => unknown[]
}

export function useInfiniteGraphQLQuery<
	TData extends Record<string, any>,
	TVariables extends Record<string, any>
>(
	useQuery: UseQueryFn<TData, TVariables>,
	getVariables: ({ pageParam }: { pageParam?: number }) => TVariables,
	options?: UseInfiniteQueryOptions<TData, unknown>,
) {
	return useInfiniteQuery(
		useQuery.getKey(getVariables({})),
		({ pageParam }) =>
			fetchData<TData, TVariables>(
				useQuery.document,
				getVariables({ pageParam }),
			)(),
		options,
	)
}
