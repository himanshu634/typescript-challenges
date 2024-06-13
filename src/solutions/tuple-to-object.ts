//link: https://typehero.dev/challenge/tuple-to-object

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type TupleToObject<T extends readonly (string | symbol | number)[]> = {
  [Key in T[number]]: Key;
};

type Solution = TupleToObject<typeof tuple>;
