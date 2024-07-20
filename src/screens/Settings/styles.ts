import styled from "styled-components/native";

const Container = styled.View`
  background-color: ${({ theme }) => theme.secondary};
  flex: 1;
  padding-top: 48px;
  padding-left: 24px;
  padding-right: 24px;
  gap: 28px;
`;
const MetricsContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const MetricLabel = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 18px;
`;
const MetricValue = styled.Text`
  color: ${({ theme }) => theme.primary};
  font-size: 18px;
`;
const MetricIcon = styled.View`
  gap: 12px;
  flex-direction: row;
  align-items: center;
`;

export { Container, MetricsContainer, MetricLabel, MetricValue, MetricIcon };
