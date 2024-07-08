// Link:: https://typehero.dev/challenge/if

export {};

type If<C extends boolean, T, F> = C extends true ? T : F;

type Answer = If<true, "a", "b">;
