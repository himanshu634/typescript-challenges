// link: https://typehero.dev/challenge/readonly

export {};

interface Todo {
  title: string;
  description: string;
  name: {
    surname: string;
  };
}

type MyReadonly<T> = {
  readonly [Key in keyof T]: T[Key];
};

type Result = MyReadonly<Todo>;
