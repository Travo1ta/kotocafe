import React from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as LogoImage } from "../../../assets/logo.svg";
import { AppRoute } from "../../../const";
import { Text, StyledLogo, StyledLogoMainPage } from "./styles";

// Логотип сайта с названием
function Logo() {
   const { pathname } = useLocation(); // получаем текущий URL

   // Если мы на главной странице - рендерим некликабельный логотип
   // Если на другой странице - рендерим ссылку на главную
   return pathname === AppRoute.MAIN ? (
      <StyledLogoMainPage>
         <LogoImage />
         <Text>Котокафе</Text>
      </StyledLogoMainPage>
   ) : (
      <StyledLogo to={AppRoute.MAIN}>
         <LogoImage />
         <Text>Котокафе</Text>
      </StyledLogo>
   );
}

export default Logo;