import React from "react";
import logo from "../../../assets/logo.svg";
import styled from "styled-components";

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: inherit;
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  
  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

const LogoText = styled.span`
  font-family: 'Arial', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #ff6b6b;
  letter-spacing: 0.5px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    font-size: 18px;
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
      />
      <LogoText>Котокафе</LogoText>
    </LogoLink>
  );
}

export default Logo;