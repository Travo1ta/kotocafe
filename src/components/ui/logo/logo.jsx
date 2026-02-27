import React from "react";
import { useLocation } from "react-router-dom";
import LogoImage from "../../../assets/logo.svg"; // измененный импорт
import { AppRoute } from "../../../const";
import { Text, StyledLogo, StyledLogoMainPage } from "./styles";

// Логотип сайта с названием
function Logo() {
  const { pathname } = useLocation();

  return pathname === AppRoute.MAIN ? (
    <StyledLogoMainPage>
      <img src={LogoImage} alt="Котокафе" /> {/* используем img вместо ReactComponent */}
      <Text>Котокафе</Text>
    </StyledLogoMainPage>
  ) : (
    <StyledLogo to={AppRoute.MAIN}>
      <img src={LogoImage} alt="Котокафе" />
      <Text>Котокафе</Text>
    </StyledLogo>
  );
}

export default Logo;