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

   // Расчет цены
   const basePrice = ticketOptions.find(t => t.id === selectType)?.price || 1000;

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
               {/* Аккордеон с радиокнопками в заголовке */}
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
            <Price>{basePrice} руб.</Price>
            <Button minWidth={460}>Купить билет</Button>
         </Form>
      </StyledSection>
   );
}

export default Buy;