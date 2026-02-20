import styled from "styled-components";
import { TitleSize } from "./constants";

export const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 700;
  line-height: 1.2;
  color: ${({ theme }) => theme.colorBlackForText || "#333333"};
  font-family: ${({ theme }) => theme.fontFamily || '"Inter", "Arial", sans-serif'};
  
  /* Размеры шрифта */
  font-size: ${({ $size }) => {
      switch ($size) {
         case TitleSize.BIG:
            return "44px";
         case TitleSize.SMALL:
            return "28px";
         default:
            return "36px";
      }
   }};
  
  /* Межстрочный интервал */
  line-height: ${({ $size }) => {
      switch ($size) {
         case TitleSize.BIG:
            return "50px";
         case TitleSize.SMALL:
            return "32px";
         default:
            return "41px";
      }
   }};
  
  /* Отступы */
  margin-bottom: ${({ $size }) => {
      switch ($size) {
         case TitleSize.BIG:
            return "24px";
         case TitleSize.SMALL:
            return "16px";
         default:
            return "20px";
      }
   }};
  
  /* Адаптивность */
  @media (max-width: ${({ theme }) => theme.breakpointTablet || "768px"}) {
    font-size: ${({ $size }) => {
      switch ($size) {
         case TitleSize.BIG:
            return "36px";
         case TitleSize.SMALL:
            return "24px";
         default:
            return "30px";
      }
   }};
    
    line-height: ${({ $size }) => {
      switch ($size) {
         case TitleSize.BIG:
            return "42px";
         case TitleSize.SMALL:
            return "28px";
         default:
            return "36px";
      }
   }};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpointMobile || "425px"}) {
    font-size: ${({ $size }) => {
      switch ($size) {
         case TitleSize.BIG:
            return "28px";
         case TitleSize.SMALL:
            return "20px";
         default:
            return "24px";
      }
   }};
    
    line-height: ${({ $size }) => {
      switch ($size) {
         case TitleSize.BIG:
            return "34px";
         case TitleSize.SMALL:
            return "24px";
         default:
            return "30px";
      }
   }};
  }
`;