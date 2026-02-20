import React from "react";
import { StyledTitle } from "./styles";
import { TitleSize, TitleLevel } from "./constants";

function Title({
  level = TitleLevel.H1,
  size = TitleSize.DEFAULT,
  children,
  className = ""
}) {
  return (
    <StyledTitle 
      as={`h${level}`} 
      $size={size} 
      className={`title ${className}`}
    >
      {children}
    </StyledTitle>
  );
}

export default Title;