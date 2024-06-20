// link: https://typehero.dev/challenge/awaited

type MyAwaited<T extends PromiseLike<any>> = Awaited<T>;

type Example = Promise<Promise<Promise<number | string>>>;

type Ans = MyAwaited<Example>;
