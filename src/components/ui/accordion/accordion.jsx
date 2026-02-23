import React, { useState } from 'react';
import AccordionItem from './accordion-item';
import StyledUl from '../../../styled/ul/ul';
import { StyledLi } from './styles';

export function Accordion({
   titleComponent, // компонент для отрисовки заголовка
   textComponent, // компонент для отрисовки текста
   content, // массив, содержащий контент аккордеона
   isHtml, // есть ли HTML в тексте
}) {
   const [openItemIndex, setOpenItemIndex] = useState(null);

   return (
      <StyledUl>
         {content.map((item, index) => (
            <StyledLi key={item.id}>
               <AccordionItem
                  titleComponent={titleComponent}
                  textComponent={textComponent}
                  title={item.title}
                  text={item.description}
                  open={index === openItemIndex}
                  onClick={() => {
                     // Меняем на положительное условие
                     setOpenItemIndex(index === openItemIndex ? null : index);
                  }}
                  isHtml={isHtml}
               />
            </StyledLi>
         ))}
      </StyledUl>
   );
}