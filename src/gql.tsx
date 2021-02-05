export type GqlString = string & { __isQueryString: symbol }

export const gql = (strings: TemplateStringsArray) =>
	strings.join("") as GqlString
