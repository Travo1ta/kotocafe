import styled from "styled-components";
import BaseSection from "../../../styled/section/section";
import Title from "../../ui/title/title";

export const StyledSection = styled(BaseSection)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: ${(props) => props.theme.colorForLightBackground};
`;

export const StyleTitle = styled(Title)`
  text-align: center;
  margin-bottom: 40px;
`;

export const FormItem = styled.div`
  margin-bottom: ${(props) => props.$bottom || 20}px;
`;

export const Price = styled.span`
  display: block;
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.theme.colorForButton};
  margin-bottom: 20px;
`;

// Стилизованный компонент для отображения радио-кнопок продолжительности
export const RadioLabelForTime = styled.span`
  display: inline-block;
  min-width: 60px;
  height: 60px;
  padding: 0 10px;
  font-weight: 700;
  font-size: 18px;
  line-height: 60px;
  text-align: center;
  color: ${(props) => props.$isChecked ? props.theme.colorWhite : props.theme.colorBlackForText};
  background-color: ${(props) => props.$isChecked ? props.theme.colorForButton : props.theme.colorGray};
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-out, color 0.2s ease-out;

  &:hover {
    background-color: ${(props) => props.$isChecked ? props.theme.colorForButtonHover : props.theme.colorForLightBackground};
  }
`;

// Стилизованный компонент для отображения радио-кнопок типа билета в аккордеоне
export const RadioLabelForType = styled.span`
  display: block;
  padding: 15px 20px;
  font-weight: 700;
  font-size: 18px;
  color: ${(props) => props.$isChecked ? props.theme.colorForButton : props.theme.colorBlackForText};
  background-color: ${(props) => props.theme.colorWhite};
  border: none;
  cursor: pointer;
  transition: color 0.2s ease-out;

  &:hover {
    color: ${(props) => props.theme.colorForButtonHover};
  }
`;

// Стилизованный компонент для текста аккордеона
export const AccordionText = styled.div`
  padding: 0 20px 20px;
  font-size: 14px;
  line-height: 1.5;
  color: ${(props) => props.theme.colorBlackForText};
  
  ul {
    margin: 10px 0;
    padding-left: 20px;
  }
  
  li {
    margin-bottom: 5px;
  }
`;