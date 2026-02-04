import styled from "styled-components";

// Импортируем SVG как строки (правильный способ для Vite)
const aboutSvgUrl = "/src/assets/about.svg";
const mapMarkSvgUrl = "/src/assets/map-mark.svg";

// Базовый параграф
const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

// Основная секция
export const AboutSection = styled.section`
  display: flex;
  position: relative;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-top: 159px;
  padding-bottom: 159px;
  padding-right: 603px;
  background-color: ${(props) => props.theme.colorForLightBackground};
  align-items: center;
  z-index: 1;
  box-sizing: border-box;

  &::after {
    position: absolute;
    top: 0;
    bottom: 0;
    right: ${(props) => props.theme.pagePadding};
    display: block;
    content: "";
    width: 446px;
    height: 446px;
    margin: auto;
    background: url(${aboutSvgUrl}) no-repeat center;
    background-size: contain;
  }
`;

// Обертка контента
export const AboutWrapper = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  min-width: 650px;
  z-index: 3;
`;

// Текст
export const AboutText = styled(Paragraph)`
  margin-top: ${(props) => props.theme.indent};
  padding-right: 122px;
  margin-bottom: 40px;
`;

// Время работы
export const WorkTime = styled(Paragraph)`
  display: inline-block;
  min-height: 43px;
  min-width: 292px;
  margin-bottom: ${(props) => props.theme.indent};
  padding: 8px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colorForDarkBackground};
  vertical-align: middle;
`;

// Адрес с иконкой
export const Address = styled(Paragraph)`
  &::before {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 10px;
    content: "";
    background: url(${mapMarkSvgUrl}) no-repeat center;
    background-size: contain;
    vertical-align: middle;
  }
`;