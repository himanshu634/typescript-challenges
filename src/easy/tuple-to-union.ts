//link: https://typehero.dev/challenge/tuple-to-union

export {};

type Arr = ["1", "2", "3"];

//# simple
// type TupleToUnion<T extends any[]> = T[number];

//# with infer
// type TupleToUnion<T extends any[]> = T extends (infer Property)[] ? Property : never

//# with recursion
// with recursion
type TupleToUnion<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First | TupleToUnion<Rest>
  : never;

type Solution = TupleToUnion<Arr>;
