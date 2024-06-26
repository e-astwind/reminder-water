import { TextProps, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

const Container = styled.View``;

interface CustomTouchableOpacityProps extends TouchableOpacityProps {
  selected: boolean;
}
interface CustomTextProps extends TextProps {
  selected: boolean;
}

const DrinkContainer = styled.TouchableOpacity<CustomTouchableOpacityProps>`
  padding: 10px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) =>
    props.selected ? props.theme.primary : props.theme.secondary};
`;
const DrinkText = styled.Text<CustomTextProps>`
  color: ${(props) =>
    props.selected ? props.theme.secondary : props.theme.primary};
`;
export { Container, DrinkContainer, DrinkText };
