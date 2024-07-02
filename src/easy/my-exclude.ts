// link :: https://typehero.dev/challenge/exclude

type MyExclude<T, U extends Partial<T>> = T extends U ? never : T;

type Result = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'
