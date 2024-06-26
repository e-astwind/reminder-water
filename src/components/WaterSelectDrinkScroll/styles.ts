import styled from "styled-components/native";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;
const ContainerScroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: "center",
  },
})`
  max-height: 80px;
`;

export { ContainerScroll, Container };
