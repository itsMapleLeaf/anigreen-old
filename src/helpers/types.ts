export type Merge<A, B> = Omit<A, keyof B> & B

export type Dict<T> = { [key: string]: T }
