export function range(start: number, end: number, { inclusive = false } = {}) {
  return Array.from(
    { length: end - start + (inclusive ? 1 : 0) },
    (_, n) => start + n,
  )
}
