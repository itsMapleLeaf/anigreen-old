import { render } from "@testing-library/react"
import { QueryClient, QueryClientProvider } from "react-query"
import { gql } from "../gql"
import { useAnilistQuery } from "./useAnilistQuery"

test("passes query options", () => {
	const baseFetch = window.fetch
	window.fetch = jest.fn()

	function Test() {
		useAnilistQuery({
			queryKey: "test",
			query: gql`
				query QueryOptionsDummy {
					Media(id: 116287) {
						title {
							english
						}
					}
				}
			`,
			enabled: false,
		})
		return null
	}

	const client = new QueryClient()

	render(
		<QueryClientProvider client={client}>
			<Test />
		</QueryClientProvider>,
	)

	expect(window.fetch).not.toBeCalled()

	window.fetch = baseFetch
})
