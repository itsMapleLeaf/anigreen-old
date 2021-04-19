/**
 * @type {import("@gqless/cli").GqlessConfig}
 */
const config = {
	endpoint: "/api/graphql",
	enumsAsStrings: false,
	react: true,
	scalars: {
		CountryCode: "string",
		FuzzyDateInt: "number",
	},
	preImport: "",
	introspection: {
		endpoint: "https://graphql.anilist.co/",
		headers: {},
	},
	destination: "./src/graphql/index.ts",
	subscriptions: false,
	javascriptOutput: false,
}

module.exports = config
