import React from "react";
import Title from "../../ui/title/title";
import { TitleSize } from "../../ui/title/constants";
import {
   AboutSection,
   AboutWrapper,
   AboutText,
   WorkTime,
   Address
} from "./styles";

function About() {
   return (
      <AboutSection>
         <AboutWrapper>
            <Title size={TitleSize.BIG}>Первое в России котокафе</Title>
            <AboutText>
               Крупнейшее котокафе России, в котором живёт 50 кошек и котов, и каждый
               из них ищет новый дом. Животных можно гладить, фотографировать, играть
               с ними.
            </AboutText>
            <WorkTime>Рабочее время с 8:00 до 23:00</WorkTime>
            <Address>
               Санкт-Петербург, набережная реки Карповки, дом 5, литера П
            </Address>
         </AboutWrapper>
      </AboutSection>
   );
}

export default About;