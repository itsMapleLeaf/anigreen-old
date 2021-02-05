export const unique = <T>(iterable: Iterable<T>): readonly T[] => [
	...new Set(iterable),
]
