import React, { forwardRef, useContext, useEffect } from "react";
import HalfMoonProgressBar from "../../components/HalfMoonProgressBar";
import { colors } from "../../global/colors/colors";
import {
  Container,
  CurrentLevelHydrationText,
  HistoryText,
  HydrationLevelContainer,
  MaxLevelHydrationText,
  RowContainer,
  Separator,
  TargetLevelHydrationContainer,
  TargetText,
} from "./styles";
import Animated, { FadeOut } from "react-native-reanimated";
import { Dimensions, FlatList, UIManager } from "react-native";
import WaterSelectDrinkScroll from "../../components/WaterSelectDrinkScroll";
import { GlobalContext } from "../../contexts/GlobalContext";
import HistoryCard from "../../components/HistoryCard";

export default function Home() {
  const { width } = Dimensions.get("window");
  const { currentLevelHydration, hydrationHistory } = useContext(GlobalContext);
  const maxLevelHydration = 2500;

  useEffect(() => {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
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
      <HistoryText>Histórico de hoje</HistoryText>
      <Animated.FlatList
        data={hydrationHistory}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <HistoryCard
            key={index + item.id.toString()}
            drink={{
              date: item.date,
              ml: item.drink_ml,
              id: item.id.toString(),
            }}
          />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Separator />}
      />
    </Container>
  );
}
