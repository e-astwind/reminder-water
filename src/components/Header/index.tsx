import React from "react";
import { EmptyView, HeaderContainer, Title } from "./styles";

export default function Header({ title, leftIcon, rightIcon }: IHeaderProps) {
  return (
    <HeaderContainer>
      {leftIcon ?? <EmptyView />}
      <Title>{title}</Title>
      {rightIcon ?? <EmptyView />}
    </HeaderContainer>
  );
}
