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
const MetricsContainerGender = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;
const MetricGenderLabel = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 18px;
  font-weight: bold;
`;

export { Container, MetricsContainerGender, MetricGenderLabel };
