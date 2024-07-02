const Tesla = ["tesla", "model 3", "model X", "model Y"] as const;
const SpaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT",
] as const;

type Length<T extends readonly any[]> = T["length"];

type TeslaLength = Length<typeof Tesla>; // expected 4
type SpaceXLength = Length<typeof SpaceX>; // expected 5
