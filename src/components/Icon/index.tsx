import { TouchableOpacity } from "react-native";
import React from "react";
import * as VectorIcon from "@expo/vector-icons";
import { IIconFamily, IIconProps } from "./types";

export default function Icon<T extends IIconFamily>({
  name,
  size = 24,
  color = "#000",
  familyName,
  style,
  onPress,
}: IIconProps<T>) {
  const IconFamily = VectorIcon[familyName];
  return (
    <TouchableOpacity style={style} disabled={!onPress} onPress={onPress}>
      <IconFamily
        name={name}
        size={size}
        color={color}
        style={style}
        onPress={onPress}
      />
    </TouchableOpacity>
  );
}
