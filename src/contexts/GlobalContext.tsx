import React, { createContext, useState, useEffect } from "react";
import { db } from "../database/config";
import { waterDrink } from "../database/schemas/water_drink_schema";
import { ToastAndroid } from "react-native";
import { IGlobalContextType, IHydrationHistory } from "./types";

export const GlobalContext = createContext<IGlobalContextType>(
  {} as IGlobalContextType
);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [hydrationHistory, setHydrationHistory] = useState<
    IHydrationHistory[] | null
  >(null);
  const [currentLevelHydration, setCurrentLevelHydration] = useState(0);

  const fetchHydrationHistory = async () => {
    try {
      const hydrationHistory = await db.select().from(waterDrink);
      setHydrationHistory(hydrationHistory as IHydrationHistory[]);
      const currentLevelHydration = hydrationHistory.reduce(
        (acc, drink) => acc + drink?.drink_ml!,
        0
      );
      setCurrentLevelHydration(currentLevelHydration);
    } catch (error) {
      console.log(error);
    }
  };

  const drinkWater = (drink: IDrink) => {
    db.insert(waterDrink)
      .values({
        id: parseInt(drink.id),
        date: new Date().getTime(),
        drink_ml: drink.ml,
      })
      .execute()
      .then(() => {
        fetchHydrationHistory();
        ToastAndroid.show("Água bebida com sucesso", 2000);
      });
  };

  useEffect(() => {
    fetchHydrationHistory();
  }, []);

  return (
    <GlobalContext.Provider
      value={{ currentLevelHydration, hydrationHistory, drinkWater }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
