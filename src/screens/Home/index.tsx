import React from "react";
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

export default function Home() {
  const { width } = Dimensions.get("window");
  const currentLevelHydration = 45;
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
    </Container>
  );
}
