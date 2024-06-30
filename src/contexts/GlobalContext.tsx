import React, { createContext, useState, useEffect } from "react";
import { db } from "../database/config";
import { waterDrink } from "../database/schemas/water_drink_schema";
import { LayoutAnimation, ToastAndroid } from "react-native";
import {
  IFetchHydrationHistory,
  IGlobalContextType,
  IHydrationHistory,
} from "./types";
import { eq, sql } from "drizzle-orm";
import { usePlaySound } from "../hooks/usePlaySound";

export const GlobalContext = createContext<IGlobalContextType>(
  {} as IGlobalContextType
);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const sound = usePlaySound();
  const [hydrationHistory, setHydrationHistory] = useState<
    IHydrationHistory[] | null
  >(null);
  const [currentLevelHydration, setCurrentLevelHydration] = useState(0);

  const fetchHydrationHistory = async ({
    filter = "today",
  }: IFetchHydrationHistory) => {
    const whereClause = {
      today: sql`date(date) = date('now')`,
      week: sql`date(date) >= date('now', 'weekday 0', '-7 days')`,
      month: sql`strftime('%Y-%m', date) = strftime('%Y-%m', 'now')`,
      year: sql`1=1`,
    };

    try {
      const hydrationHistory = await db
        .select()
        .from(waterDrink)
        .where(whereClause[filter])
        .execute();

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
    const isoDateString = new Date().toISOString();
    db.insert(waterDrink)
      .values({
        id: Math.random().toString(),
        date: isoDateString,
        drink_ml: drink.ml,
      })
      .execute()
      .then(() => {
        sound.then((sound) => {
          sound.playSound();
        });
        fetchHydrationHistory({});
        ToastAndroid.show("Água bebida com sucesso", 2000);
      });
  };

  const deleteDrink = async (id: string) => {
    try {
      await db.delete(waterDrink).where(eq(waterDrink.id, id));
      fetchHydrationHistory({});
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    } catch (error) {
      ToastAndroid.show("Erro ao deletar a bebida", 2000);
    }
  };

  useEffect(() => {
    fetchHydrationHistory({ filter: "today" });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        currentLevelHydration,
        hydrationHistory,
        drinkWater,
        deleteDrink,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
