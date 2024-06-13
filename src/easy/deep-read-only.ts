// link: https://typehero.dev/challenge/deep-readonly

export {}

type X = {
  a: () => string;
  x: {
    a: 1;
    b: "hi";
    c: {
      d: 12;
      e: 43;
    };
  };
  y: "hey";
};

type DeepReadOnly<T> = T extends Function
  ? T
  : {
      readonly [Property in keyof T]: T[Property] extends Object
        ? DeepReadOnly<T[Property]>
        : T[Property];
    };

type Solution = DeepReadOnly<X>;
