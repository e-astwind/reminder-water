import React, { useContext, useEffect, useRef } from "react";
import CircularProgressBar from "../../components/CircularProgressBar";
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
import Animated from "react-native-reanimated";
import { Dimensions, UIManager, View } from "react-native";
import WaterSelectDrinkScroll from "../../components/WaterSelectDrinkScroll";
import { GlobalContext } from "../../contexts/GlobalContext";
import HistoryCard from "../../components/HistoryCard";
import LottieView from "lottie-react-native";

export default function Home() {
  const { width } = Dimensions.get("window");
  const { currentLevelHydration, hydrationHistory } = useContext(GlobalContext);
  const maxLevelHydration = 2500;
  const animation = useRef(null);
  useEffect(() => {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }, []);
  return (
    <Container>
      <HydrationLevelContainer>
        <CircularProgressBar
          color={colors.primary}
          radius={width / 2.8}
          currentValue={currentLevelHydration}
          maxValue={maxLevelHydration}
        />
        <TargetLevelHydrationContainer>
          <TargetText>Objetivo do dia</TargetText>
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
        ListEmptyComponent={() => (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <LottieView
              autoPlay
              resizeMode="center"
              speed={1.5}
              ref={animation}
              style={{
                width: 980,
                height: 260,
                backgroundColor: "transparent",
              }}
              source={require("../../assets/images/water.json")}
            />
            <TargetText> Você ainda não bebeu água hoje! </TargetText>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Separator />}
      />
    </Container>
  );
}
