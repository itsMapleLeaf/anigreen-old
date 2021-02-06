import { unique } from "./unique"

test("unique", () => {
	expect(unique([1, 2, 2, 2, 3, 3])).toEqual([1, 2, 3])
})
