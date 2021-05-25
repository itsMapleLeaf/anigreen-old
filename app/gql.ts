// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const gql = (constants: TemplateStringsArray, ...variables: never[]) =>
  constants.join(",")
