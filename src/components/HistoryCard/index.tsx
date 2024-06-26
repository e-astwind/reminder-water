import { Text } from "react-native";
import React from "react";
import { Container, TextMlDrink, WaterDrinkContainer } from "./styles";
import Icon from "../Icon";
import { useTheme } from "styled-components/native";
import { formatDateToTime } from "../../utils/formatDateTime";

export default function HistoryCard({ drink }: IHistoryCardProps) {
  const theme = useTheme();
  return (
    <Container>
      <WaterDrinkContainer>
        <Icon
          familyName="MaterialIcons"
          name="local-drink"
          color={theme.primary}
        />
        <TextMlDrink>{drink.ml}ml</TextMlDrink>
      </WaterDrinkContainer>
      <WaterDrinkContainer>
        <Text>{formatDateToTime(drink.date)}</Text>
        <Icon familyName="Feather" name="trash" color={theme.primary} />
      </WaterDrinkContainer>
    </Container>
  );
}
