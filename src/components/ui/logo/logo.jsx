import React from "react";
import logo from "../../../assets/logo.svg";
import styled from "styled-components";

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  flex-shrink: 0;
`;

const LogoText = styled.span`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.colorBlack};
  letter-spacing: 0.5px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

function Logo() {
  return (
    <LogoLink href="/">
      <LogoImage 
        src={logo} 
        alt="Логотип Котокафе" 
        width="40"
        height="40"
        loading="lazy"
      />
      <LogoText>Котокафе</LogoText>
    </LogoLink>
  );
}

export default Logo;