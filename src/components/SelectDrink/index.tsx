import { Text } from "react-native";
import React, { useState } from "react";
import { DrinkContainer, DrinkText } from "./styles";
import Icon from "../Icon";
import { useTheme } from "styled-components/native";

export default function SelectDrink({ drinks }: ISelectDrinkProps) {
  const theme = useTheme();
  const [drinkSelectedId, setDrinkSelectedId] = useState<string>("1");

  const drinkWater = (drinkId: string) => {
    console.log(drinkId);
  };

  const selectDrink = (drinkId: string) => {
    if (drinkId === drinkSelectedId) {
      drinkWater(drinkId);
      return;
    }
    setDrinkSelectedId(drinkId);
  };

  return (
    <>
      {drinks.map((drink, index) => {
        const isSelected = drinkSelectedId === drink.id;
        return (
          <DrinkContainer
            selected={isSelected}
            onPress={() => selectDrink(drink.id)}
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
