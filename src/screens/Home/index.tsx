import React, { useEffect, useState } from "react";
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
import { waterDrink } from "../../database/schemas/water_drink_schema";
import { db } from "../../database/config";

export default function Home() {
  const { width } = Dimensions.get("window");
  const [hydrationHistory, setHydrationHistory] = useState<
    | {
        id: number;
        date: number;
        drink_ml: number;
      }[]
    | null
  >(null);
  const [currentLevelHydration, setCurrentLevelHydration] = useState(0);

  const maxLevelHydration = 100;

  const fetchHydrationHistory = async () => {
    try {
      const hydrationHistory = await db.select().from(waterDrink);
      setHydrationHistory(
        hydrationHistory as {
          id: number;
          date: number;
          drink_ml: number;
        }[]
      );
      const currentLevelHydration = hydrationHistory.reduce(
        (acc, drink) => acc + drink?.drink_ml!,
        0
      );
      setCurrentLevelHydration(currentLevelHydration);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchHydrationHistory();
  }, []);

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
