import { View, Text } from "react-native";
import React from "react";
import { ButtonText, Container } from "./styles";
import { IButtonProps } from "./types";

export default function Button({
  variant = "primary",
  label = "",
  ...props
}: IButtonProps) {
  return (
    <Container variant={variant} {...props}>
      <ButtonText variant={variant}>{label}</ButtonText>
    </Container>
  );
}
