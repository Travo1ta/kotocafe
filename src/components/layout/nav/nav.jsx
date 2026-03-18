import React from "react";
import { useLocation } from "react-router-dom";
import Button from "../../ui/button/button";
import { AppRoute } from "../../../const";
import { StyledButton } from "./styles";

const buttons = [
   {
      to: AppRoute.MAIN,
      button: (
         <StyledButton
            key="nav-main"
            minWidth={260}
            link={AppRoute.MAIN}
         >
            Главная
         </StyledButton>
      )
   },
   {
      to: AppRoute.BUY,
      button: (
         <Button
            key="nav-buy"
            minWidth={260}
            link={AppRoute.BUY}
         >
            Купить билет
         </Button>
      )
   }
];

function Nav() {
   const pageUrl = useLocation().pathname;

   return (
      <nav>
         {buttons
            .filter((button) => button.to !== pageUrl)
            .map((button) => button.button)}
      </nav>
   );
}

export default Nav;