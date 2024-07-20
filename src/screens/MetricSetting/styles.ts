import styled from "styled-components/native";

const Container = styled.View`
  background-color: ${({ theme }) => theme.secondary};
  flex: 1;
  align-items: center;
  padding-top: 48px;
  padding-left: 24px;
  padding-right: 24px;
  gap: 28px;
`;
const MetricsContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;
const MetricLabel = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 18px;
  font-weight: bold;
`;
const AlignContainer = styled.View`
  align-items: center;
  gap: 12px;
`;

export { Container, MetricsContainer, MetricLabel, AlignContainer };
