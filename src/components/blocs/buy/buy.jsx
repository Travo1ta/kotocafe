import React from "react";
import Form from "../../../styled/form/form";
import Label from "../../../styled/label/label";
import Button from "../../ui/button/button";
import { TitleSize } from "../../ui/title/constants";
import { StyledSection, Price, FormItem, StyleTitle } from "./styles";

// страница покупки
function Buy({ buyOptions }) {
  return (
    <StyledSection>
      <StyleTitle level={1} size={TitleSize.BIG}>
        Купить билет
      </StyleTitle>
      <Form $width={540}>
        <FormItem>
          <Label $margin={12}>Продолжительность (часов)</Label>
          {/* Здесь будут radio кнопки из buyOptions.durationOptions */}
        </FormItem>
        <FormItem $bottom={22}>
          <Label $margin={12}>Тип билета</Label>
          {/* Здесь будут radio кнопки из buyOptions.ticketOptions */}
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