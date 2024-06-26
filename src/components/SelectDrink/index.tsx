import React, { useState } from "react";
import { DrinkContainer, DrinkText } from "./styles";
import Icon from "../Icon";
import { useTheme } from "styled-components/native";
import { waterDrink } from "../../database/schemas/water_drink_schema";
import { db } from "../../database/config";
import { ToastAndroid } from "react-native";

export default function SelectDrink({ drinks }: ISelectDrinkProps) {
  const theme = useTheme();
  const [drinkSelectedId, setDrinkSelectedId] = useState<string>("1");

  const drinkWater = (drink: IDrink) => {
    db.insert(waterDrink)
      .values({
        id: parseInt(drink.id),
        date: new Date().getTime(),
        drink_ml: drink.ml,
      })
      .execute()
      .then(() => ToastAndroid.show("Água bebida com sucesso", 2000));
  };

  const selectDrink = (drink: IDrink) => {
    if (drink.id === drinkSelectedId) {
      drinkWater(drink);
      return;
    }
    setDrinkSelectedId(drink.id);
  };

  return (
    <>
      {drinks.map((drink, index) => {
        const isSelected = drinkSelectedId === drink.id;
        return (
          <DrinkContainer
            selected={isSelected}
            onPress={() => selectDrink(drink)}
            key={index}
          >
            <Icon
              name="local-drink"
              size={30}
              familyName="MaterialIcons"
              color={isSelected ? theme.secondary : theme.primary}
            />
            <DrinkText selected={isSelected}>{drink.ml}ml</DrinkText>
          </DrinkContainer>
        );
      })}
    </>
  );
}
