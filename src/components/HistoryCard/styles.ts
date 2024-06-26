import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const WaterDrinkContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;
const TextMlDrink = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 16px;
`;

export { Container, TextMlDrink, WaterDrinkContainer };
