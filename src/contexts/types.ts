export interface IGlobalContextType {
  hydrationHistory: IHydrationHistory[] | null;
  currentLevelHydration: number;
  drinkWater: (drink: IDrink) => void;
}

export interface IHydrationHistory {
  id: string;
  date: string;
  drink_ml: number;
}
