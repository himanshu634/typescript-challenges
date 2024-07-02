// link :: https://typehero.dev/challenge/concat

type Concat<T extends readonly any[], U extends readonly any[]> = [...T, ...U];

type T1 = [1, 2, 3];

type T2 = [3, 4];

type Answer = Concat<T1, T2>;
