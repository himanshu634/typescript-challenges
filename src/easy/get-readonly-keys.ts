// link :: https://typehero.dev/challenge/get-readonly-keys
export {};
type GetReadonlyKeys<T> = any;

// TODO: SOLVE THIS.
interface Todo {
  readonly title: string;
  readonly description: string;
  completed: boolean;
}

type Keys = GetReadonlyKeys<Todo>;
