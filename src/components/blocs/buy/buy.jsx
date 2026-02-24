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

function Buy({ buyOptions }) {
   const { durationOptions, ticketOptions } = buyOptions;
   const [duration, setDuration] = useState(durationOptions[0]);
   const [selectType, setSelectType] = useState(ticketOptions[0].id);

   // Находим выбранный тип билета по id
   const selectedTicket = ticketOptions.find((option) => option.id === selectType);

   // Вычисляем цену: часы * цена билета
   const price = duration * selectedTicket.price;

   // Обработчик покупки
   const handleBuy = () => {
      alert(
         `Спасибо за покупку.
Вы приобрели билет класса: ${selectedTicket.title}.
Продолжительность посещения (часов): ${duration}.
Цена билета: ${price} руб.`
      );
   };

   // Создаем контент для аккордеона
   const accordionContent = ticketOptions.map((option) => ({
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
   }));

   return (
      <StyledSection>
         <StyleTitle level={1} size={TitleSize.BIG}>
            Купить билет
         </StyleTitle>
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
      </StyledSection>
   );
}

export default Buy;