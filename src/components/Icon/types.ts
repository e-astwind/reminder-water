import * as Icon from "@expo/vector-icons";
import { ViewStyle } from "react-native";

type IIconFamily = keyof typeof Icon;
type IconNames<T extends IIconFamily> = keyof (typeof Icon)[T]["glyphMap"];

interface IIconProps<T extends IIconFamily> {
  name: IconNames<T>;
  familyName: T;
  size?: number;
  color?: string;
  style?: ViewStyle;
  onPress?: () => void;
}
export { IIconProps, IIconFamily };
