import { TouchableOpacityProps } from "react-native";

export interface IButtonProps extends TouchableOpacityProps {
  variant?: "primary" | "secondary";
  label?: string;
}
