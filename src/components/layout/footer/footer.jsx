import React from "react";
import Logo from "../../ui/logo/logo";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px ${(props) => props.theme.pagePadding};
  background-color: ${(props) => props.theme.colorForDarkBackground};
  color: ${(props) => props.theme.colorWhite};
  margin-top: auto;
`;

const Copyright = styled.span`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSize};
  opacity: 0.8;
`;

function Footer() {
  return (
    <FooterWrapper>
      <Logo />
      <Copyright>Создано 2021</Copyright>
    </FooterWrapper>
  );
}

export default Footer;