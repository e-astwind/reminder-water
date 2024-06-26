import React, { useRef } from "react";
import { Container, ContainerScroll } from "./styles";
import SelectDrink from "../SelectDrink";
import Icon from "../Icon";
import { ScrollView } from "react-native";
import { useTheme } from "styled-components/native";

export default function WaterSelectDrinkScroll() {
  const scrollViewRef = useRef<ScrollView>(null);
  const theme = useTheme();

  const onScroll = () => {
    const moveToRight = () => {
      scrollViewRef?.current?.scrollTo({
        x: 100,
        animated: true,
      });
    };
    const moveToLeft = () => {
      scrollViewRef?.current?.scrollTo({
        x: -100,
        animated: true,
      });
    };

    return { moveToRight, moveToLeft };
  };
  return (
    <Container>
      <Icon
        name="chevron-back"
        size={24}
        familyName="Ionicons"
        onPress={onScroll().moveToLeft}
        color={theme.secondaryText}
      />
      <ContainerScroll
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <SelectDrink
          drinks={[
            { ml: 100, id: "1" },
            { ml: 200, id: "2" },
            { ml: 300, id: "3" },
            { ml: 400, id: "4" },
            { ml: 500, id: "5" },
          ]}
        />
      </ContainerScroll>
      <Icon
        name="chevron-forward"
        size={24}
        familyName="Ionicons"
        onPress={onScroll().moveToRight}
        color={theme.secondaryText}
      />
    </Container>
  );
}
