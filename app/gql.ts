export const gql = (constants: TemplateStringsArray, ...variables: never[]) =>
  constants.join(",")
