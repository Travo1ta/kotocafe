import React, { useState } from "react";
import Form from "../../../styled/form/form";
import Label from "../../../styled/label/label";
import Button from "../../ui/button/button";
import RadioButton from "../../ui/radio-button/radio-button";
import { TitleSize } from "../../ui/title/constants";
import StyledUl from "../../../styled/ul/ul";
import StyledLi from "../../../styled/li/li";
import {
   StyledSection,
   Price,
   FormItem,
   StyleTitle,
   RadioLabelForTime
} from "./styles";

// страница покупки
function Buy({ buyOptions }) {
   const { durationOptions } = buyOptions;
   const [duration, setDuration] = useState(durationOptions[0]);

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
                           text={option}
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
               {/* Здесь будут radio кнопки для типа билета */}
            </FormItem>

            <Label $small $margin={6}>
               Цена
            </Label>
            <Price>500 руб.</Price>
            <Button minWidth={460}>Купить билет</Button>
         </Form>
      </StyledSection>
   );
}

export default Buy;