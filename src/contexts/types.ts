export interface IGlobalContextType {
  hydrationHistory: IHydrationHistory[] | null;
  currentLevelHydration: number;
  drinkWater: (drink: IDrink) => void;
  deleteDrink: (id: string) => void;
}
export interface IFetchHydrationHistory {
  filter?: "today" | "week" | "month" | "year";
}

export interface IHydrationHistory {
  id: string;
  date: string;
  drink_ml: number;
}
