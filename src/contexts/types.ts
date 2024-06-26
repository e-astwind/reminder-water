export interface IGlobalContextType {
  hydrationHistory:
    | {
        id: number;
        date: number;
        drink_ml: number;
      }[]
    | null;
  currentLevelHydration: number;
  drinkWater: (drink: IDrink) => void;
}

export interface IHydrationHistory {
  id: number;
  date: number;
  drink_ml: number;
}
