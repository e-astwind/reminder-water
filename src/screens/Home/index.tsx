import React, { useContext } from "react";
import HalfMoonProgressBar from "../../components/HalfMoonProgressBar";
import { colors } from "../../global/colors/colors";
import {
  Container,
  CurrentLevelHydrationText,
  HydrationLevelContainer,
  MaxLevelHydrationText,
  RowContainer,
  TargetLevelHydrationContainer,
  TargetText,
} from "./styles";
import { Dimensions } from "react-native";
import WaterSelectDrinkScroll from "../../components/WaterSelectDrinkScroll";
import { GlobalContext } from "../../contexts/GlobalContext";

export default function Home() {
  const { width } = Dimensions.get("window");
  const { currentLevelHydration, hydrationHistory } = useContext(GlobalContext);
  const maxLevelHydration = 100;

  return (
    <Container>
      <HydrationLevelContainer>
        <HalfMoonProgressBar
          color={colors.primary}
          radius={width / 2.8}
          currentValue={currentLevelHydration}
          maxValue={maxLevelHydration}
        />
        <TargetLevelHydrationContainer>
          <TargetText>Objetivo</TargetText>
          <RowContainer>
            <CurrentLevelHydrationText>
              {currentLevelHydration}
            </CurrentLevelHydrationText>
            <MaxLevelHydrationText>
              /{maxLevelHydration}ml
            </MaxLevelHydrationText>
          </RowContainer>
        </TargetLevelHydrationContainer>
      </HydrationLevelContainer>
      <WaterSelectDrinkScroll />
      {hydrationHistory?.map((drink, index) => (
        <RowContainer key={index}>
          <CurrentLevelHydrationText>
            {drink.drink_ml}ml
          </CurrentLevelHydrationText>
          <MaxLevelHydrationText>
            {new Date(drink.date).toLocaleDateString()}
          </MaxLevelHydrationText>
        </RowContainer>
      ))}
    </Container>
  );
}
