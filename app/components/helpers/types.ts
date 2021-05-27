/**
 * Intersect two types, where the second's properties overwrites the first.
 * Mimics JS spread behavior
 */
export type Spread<A, B> = Omit<A, keyof B> & B

export type Dict<T> = { [key: string]: T }
