import React from "react";
import { useLocation } from "react-router-dom";
import Button from "../../ui/button/button";
import { AppRoute } from "../../../const";
import { StyledButton } from "./styles";

// Массив с кнопками навигации
const buttons = [
   {
      to: AppRoute.MAIN,
      button: (
         <StyledButton
            minWidth={260}
            key={AppRoute.MAIN}
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
            minWidth={260}
            key={AppRoute.BUY}
            link={AppRoute.BUY}
         >
            Купить билет
         </Button>
      )
   }
];

function Nav() {
   // Получаем текущий URL
   const pageUrl = useLocation().pathname;

   return (
      <nav>
         {buttons
            // Фильтруем: убираем кнопку, ведущую на текущую страницу
            .filter((button) => button.to !== pageUrl)
            // Рендерим оставшиеся кнопки
            .map((button) => button.button)}
      </nav>
   );
}

export default Nav;