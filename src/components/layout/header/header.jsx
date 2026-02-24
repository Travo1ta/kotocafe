import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../ui/logo/logo";
import Nav from "../nav/nav";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px ${(props) => props.theme.pagePadding};
  background-color: ${(props) => props.theme.colorWhite};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.colorBlackForText};
  text-decoration: none;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 5px;
  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: ${(props) => props.theme.colorForLightBackground};
  }

  &.active {
    color: ${(props) => props.theme.colorForButton};
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <NavLinks>
        <StyledLink to="/">Главная</StyledLink>
        <StyledLink to="/buy">Купить билет</StyledLink>
      </NavLinks>
      <Nav />
    </StyledHeader>
  );
}

export default Header;