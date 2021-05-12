import { capitalize } from "./capitalize"

export const titleCase = (text: string) =>
  text.split(" ").map(capitalize).join("")
