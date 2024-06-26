import React, { useContext } from "react";
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
import { Dimensions, FlatList } from "react-native";
import WaterSelectDrinkScroll from "../../components/WaterSelectDrinkScroll";
import { GlobalContext } from "../../contexts/GlobalContext";
import HistoryCard from "../../components/HistoryCard";

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
      <HistoryText>Histórico de hoje</HistoryText>
      <FlatList
        data={hydrationHistory}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
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
        ItemSeparatorComponent={() => <Separator />}
      />
    </Container>
  );
}
