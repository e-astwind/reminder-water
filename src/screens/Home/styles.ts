import styled from "styled-components/native";

const Container = styled.View`
  background-color: ${({ theme }) => theme.secondary};
  flex: 1;
  padding-top: 48px;
  padding-left: 24px;
  padding-right: 24px;
  gap: 24px;
`;

const HydrationLevelContainer = styled.View`
  align-self: center;
  justify-content: center;
  align-items: center;
`;
const CurrentLevelHydrationText = styled.Text`
  color: ${({ theme }) => theme.primary};
  font-size: 24px;
`;
const MaxLevelHydrationText = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 24px;
`;
const TargetLevelHydrationContainer = styled.View`
  align-self: center;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 18px;
`;
const RowContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const TargetText = styled.Text`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 18px;
`;

export {
  Container,
  CurrentLevelHydrationText,
  MaxLevelHydrationText,
  TargetLevelHydrationContainer,
  HydrationLevelContainer,
  TargetText,
  RowContainer,
};
