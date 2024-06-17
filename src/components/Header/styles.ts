import styled from "styled-components/native";

const HeaderContainer = styled.View`
  background-color: ${({ theme }) => theme.secondary};
  padding-top: 48px;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const Title = styled.Text`
  color: ${({ theme }) => theme.text};
  font-size: 18px;
  font-weight: bold;
`;
const EmptyView = styled.View`
  width: 24px;
`;
export { HeaderContainer, Title, EmptyView };
