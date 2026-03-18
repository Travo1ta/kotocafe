import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "./styles";

function Button({
   children,
   link,
   minWidth,
   className,
   onClick,
   ...props
}) {
   const navigate = useNavigate();

   // Добавляем id для идентификации кнопки
   const buttonId = React.useId();

   console.log(`Button [${buttonId}] получил пропсы:`, {
      link,
      minWidth,
      children,
      hasOnClick: !!onClick
   });

   const handleClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log(`Button [${buttonId}] клик, link:`, link, 'hasOnClick:', !!onClick);

      if (onClick) {
         console.log(`Button [${buttonId}] вызывает onClick`);
         onClick(e);
      } else if (link) {
         console.log(`Button [${buttonId}] переход на:`, link);
         navigate(link);
      }
   };

   return (
      <StyledButton
         as="button"
         $minWidth={minWidth}
         onClick={handleClick}
         type="button"
         className={className}
         data-button-id={buttonId}
         {...props}
      >
         {children}
      </StyledButton>
   );
}

export default Button;