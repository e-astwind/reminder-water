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
const HistoryText = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 18px;
  font-weight: bold;
`;
const Separator = styled.View`
  width: 1px;
  height: 24px;
  border-color: #000;
  border-style: dotted;
  border-width: 0.5px;
  margin-top: 4px;
  margin-bottom: 4px;
  margin-left: 10px;
  border-radius: 5px;
`;

export {
  Container,
  CurrentLevelHydrationText,
  MaxLevelHydrationText,
  TargetLevelHydrationContainer,
  HydrationLevelContainer,
  TargetText,
  RowContainer,
  HistoryText,
  Separator,
};
