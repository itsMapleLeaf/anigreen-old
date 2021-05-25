// modulo with looping for negative numbers
// https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
export const mod = (num: number, radix: number) =>
  ((num % radix) + radix) % radix
