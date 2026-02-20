import React from "react";
import Button from "../../ui/button/button";
import styled from "styled-components";

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
`;

function Nav() {
  return (
    <NavWrapper>
      <Button>Купить билет</Button>
    </NavWrapper>
  );
}

export default Nav;
