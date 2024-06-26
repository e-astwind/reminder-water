import React, { useContext, useState } from "react";
import { DrinkContainer, DrinkText } from "./styles";
import Icon from "../Icon";
import { useTheme } from "styled-components/native";
import { GlobalContext } from "../../contexts/GlobalContext";

export default function SelectDrink({ drinks }: ISelectDrinkProps) {
  const theme = useTheme();
  const { drinkWater } = useContext(GlobalContext);
  const [drinkSelectedId, setDrinkSelectedId] = useState<string>("1");

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
