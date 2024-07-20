import styled from "styled-components/native";
import { IButtonProps } from "./types";

interface ICustomText {
  variant: "primary" | "secondary";
}

const Container = styled.TouchableOpacity<IButtonProps>`
  background-color: ${({ theme, variant }) =>
    variant === "primary" ? theme.primary : "transparent"};
  border: 1px solid ${({ theme }) => theme.primary};
  padding: 16px 68px;

  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;
const ButtonText = styled.Text<ICustomText>`
  color: ${({ theme, variant }) =>
    variant === "primary" ? theme.secondary : theme.primary};
  font-size: 18px;
`;
export { Container, ButtonText };
