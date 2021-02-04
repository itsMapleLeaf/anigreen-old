export const gql = (
	strings: TemplateStringsArray,
	...interpolations: never[]
) => strings.join("")
