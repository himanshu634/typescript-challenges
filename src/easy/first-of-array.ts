// link :; https://typehero.dev/challenge/first-of-array

export {};

type First<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First
  : never;

type Array = [1, 2, 3];

type Ans = First<Array>;
