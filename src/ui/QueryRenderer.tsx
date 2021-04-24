import type { ReactNode } from "react"
import type { QueryObserverResult } from "react-query"
import LoadingPlaceholder from "./LoadingPlaceholder"

type Props<Data> = QueryObserverResult<Data> & {
	loadingElement?: ReactNode
	errorElement?: ReactNode
	renderData: (data: Data) => ReactNode
}

export default function QueryRenderer<Data>({
	loadingElement = <LoadingPlaceholder />,
	errorElement = <p>An error occured :(</p>,
	...props
}: Props<Data>) {
	return (
		<>
			{props.isError && errorElement}
			{props.data && props.renderData(props.data)}
			{(props.isLoading || props.isFetching) && loadingElement}
		</>
	)
}
