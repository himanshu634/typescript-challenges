// link :: https://typehero.dev/challenge/includes

// TODO: Solve this problem.
type Includes<T extends readonly any[], U> = U extends T["length"]
  ? true
  : false;

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Santana">;
