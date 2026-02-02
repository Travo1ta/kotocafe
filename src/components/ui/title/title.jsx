import React from "react";
import { StyledTitle } from "./styles";
import { TitleSize, TitleLevel } from "./constants";

// Заголовок
function Title({
  level = TitleLevel.H1, // уровень h1, h2 и т.д. TitleLevel
  size = TitleSize.DEFAULT, // размер заголовка TitleSize
  children, // дочерний элемент, который будет отображён в заголовке
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
export { TitleSize, TitleLevel };