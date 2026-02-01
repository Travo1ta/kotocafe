import React from "react";
import styled from "styled-components";
import { TitleSize } from './constants';

const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: 36px;
  line-height: 41px;
  
  ${props => props.size === TitleSize.SMALL && `
    line-height: 32px;
    font-size: 28px;
  `}
  
  ${props => props.size === TitleSize.BIG && `
    line-height: 50px;
    font-size: 44px;
  `}
`;

function Title({ children, size, as, ...props }) {
   const Tag = as || (size === TitleSize.BIG ? 'h1' :
      size === TitleSize.SMALL ? 'h3' : 'h2');

   return (
      <StyledTitle as={Tag} size={size} {...props}>
         {children}
      </StyledTitle>
   );
}

export default Title;