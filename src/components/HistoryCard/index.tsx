import { Text } from "react-native";
import React, { useContext } from "react";
import { Container, TextMlDrink, WaterDrinkContainer } from "./styles";
import Icon from "../Icon";
import { useTheme } from "styled-components/native";
import { formatDateToTime } from "../../utils/formatDateTime";
import { GlobalContext } from "../../contexts/GlobalContext";

export default function HistoryCard({ drink }: IHistoryCardProps) {
  const theme = useTheme();
  const { deleteDrink } = useContext(GlobalContext);
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
        <Icon
          familyName="Feather"
          name="trash"
          color={theme.primary}
          onPress={() => deleteDrink(drink.id)}
        />
      </WaterDrinkContainer>
    </Container>
  );
}
