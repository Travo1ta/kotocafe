import React from "react";
import Logo from "../../ui/logo/logo";
import Nav from "../nav/nav";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px ${(props) => props.theme.pagePadding};
  background-color: ${(props) => props.theme.colorWhite};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav />
    </HeaderWrapper>
  );
}

export default Header;