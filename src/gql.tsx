export type GqlString = string & { __isQueryString: symbol }

export const gql = (
	strings: TemplateStringsArray,
	...interpolations: never[]
) => strings.join("") as GqlString
