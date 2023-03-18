export type FirstType = {
  superhero: string;
};

export type SecondType = {
  firstName: string;
  lastName: string;
  food?: string;
};

export type ThirdType = {
  colour: string;
};

export type StrategyResultType = FirstType | SecondType | ThirdType | undefined;
