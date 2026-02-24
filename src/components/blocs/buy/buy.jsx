import React, { useState } from "react";
import Form from "../../../styled/form/form";
import Label from "../../../styled/label/label";
import Button from "../../ui/button/button";
import RadioButton from "../../ui/radio-button/radio-button";
import { Accordion } from "../../ui/accordion/accordion";
import { TitleSize } from "../../ui/title/constants";
import StyledUl from "../../../styled/ul/ul";
import StyledLi from "../../../styled/li/li";
import {
   StyledSection,
   Price,
   FormItem,
   StyleTitle,
   RadioLabelForTime,
   RadioLabelForType,
   AccordionText
} from "./styles";

// страница покупки
function Buy({
   // деструктурируем buyOptions с значениями по умолчанию
   buyOptions: { durationOptions = [], ticketOptions = [] }
}) {
   // Проверяем, можно ли покупать (есть ли опции)
   const canBuy = durationOptions.length > 0 && ticketOptions.length > 0;

   // Состояния для выбранных значений
   const [duration, setDuration] = useState(canBuy ? durationOptions[0] : 0);
   const [selectType, setSelectType] = useState(canBuy ? ticketOptions[0]?.id : null);

   // Находим выбранный тип билета
   const selectedTicket = canBuy
      ? ticketOptions.find((option) => option.id === selectType)
      : null;

   // Вычисляем цену
   const price = canBuy ? duration * (selectedTicket?.price || 0) : 0;

   // Создаем контент для аккордеона (только если можно покупать)
   const accordionContent = canBuy
      ? ticketOptions.map((option) => ({
         id: option.id,
         title: (
            <RadioButton
               labelComponent={RadioLabelForType}
               selectValue={selectType}
               value={option.id}
               text={option.title}
               onChange={(el) => {
                  setSelectType(Number(el.target.value));
               }}
            />
         ),
         description: option.description
      }))
      : [];

   // Обработчик покупки
   const handleBuy = () => {
      if (canBuy && selectedTicket) {
         alert(
            `Спасибо за покупку!
Вы приобрели билет класса: ${selectedTicket.title}
Продолжительность посещения (часов): ${duration}
Цена билета: ${price} руб.`
         );
      }
   };

   return (
      <StyledSection>
         <StyleTitle level={1} size={TitleSize.BIG}>
            Купить билет
         </StyleTitle>

         {canBuy ? (
            <Form $width={540}>
               <FormItem>
                  <Label $margin={12}>Продолжительность (часов)</Label>
                  <StyledUl $isGridList $indent={12} $align="left">
                     {durationOptions.map((option) => (
                        <StyledLi key={option}>
                           <RadioButton
                              labelComponent={RadioLabelForTime}
                              selectValue={duration}
                              value={option}
                              text={`${option} ч`}
                              name="duration"
                              onChange={(el) => {
                                 setDuration(Number(el.target.value));
                              }}
                           />
                        </StyledLi>
                     ))}
                  </StyledUl>
               </FormItem>

               <FormItem $bottom={22}>
                  <Label $margin={12}>Тип билета</Label>
                  <Accordion
                     titleComponent={RadioLabelForType}
                     textComponent={AccordionText}
                     content={accordionContent}
                     isHtml={true}
                  />
               </FormItem>

               <Label $small $margin={6}>
                  Цена
               </Label>
               <Price>{price} руб.</Price>
               <Button minWidth={460} onClick={handleBuy}>
                  Купить билет
               </Button>
            </Form>
         ) : (
            <p style={{
               fontSize: '18px',
               color: '#666',
               textAlign: 'center',
               padding: '40px',
               backgroundColor: '#fff',
               borderRadius: '10px'
            }}>
               Покупка билетов временно недоступна
            </p>
         )}
      </StyledSection>
   );
}

export default Buy;