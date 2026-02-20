import styled from "styled-components";
import { StyledSection } from "../../../styled";

// Импортируем SVG как модули, но получаем их URL
import starsImageUrl from "../../../assets/stars-image.svg";
import starsLeftUrl from "../../../assets/stars-left.svg";
import starsRightUrl from "../../../assets/stars-right.svg";

// Проверяем, что импорты возвращают строки (Vite может вернуть объект)
const starsImage = typeof starsImageUrl === 'string' ? starsImageUrl : starsImageUrl.default || starsImageUrl;
const starsLeft = typeof starsLeftUrl === 'string' ? starsLeftUrl : starsLeftUrl.default || starsLeftUrl;
const starsRight = typeof starsRightUrl === 'string' ? starsRightUrl : starsRightUrl.default || starsRightUrl;

// Основная секция StarsList
export const StarsListSection = styled(StyledSection)`
  position: relative;
  display: flex;
  padding-right: ${(props) => props.theme.pagePadding};
  padding-left: ${(props) => props.theme.pagePadding};
  padding-top: 100px;
  padding-bottom: 80px;
  background-color: #ffeead;
  background-image: url("${starsImage}");
  background-position: left bottom;
  background-size: 449px 304px;
  background-repeat: no-repeat;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;

  &::before {
    position: absolute;
    top: 36px;
    left: 0;
    width: 213px;
    height: 170px;
    content: "";
    background-image: url("${starsLeft}");
    background-size: contain;
    background-repeat: no-repeat;
  }

  &::after {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 111px;
    height: 158px;
    content: "";
    background-image: url("${starsRight}");
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

// Контейнер для карточек
export const StarsContainer = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 0;
  padding: 0;
  margin-top: 44px;
  margin-bottom: 44px;
  font-size: 0;
  line-height: 0;
  text-align: center;
  list-style: none;
  width: 100%;
`;

// Элемент карточки
export const StarItem = styled.li`
  display: flex;
  height: 525px; /* Фиксированная высота для всех элементов */
  
  /* Фиксируем ширину карточек */
  width: calc(33.333% - 14px); /* 3 карточки в ряд с учетом gap */
  min-width: 353px; /* Минимальная ширина как у карточки */
  
  @media (max-width: 1200px) {
    width: calc(50% - 10px); /* 2 карточки в ряд на средних экранах */
  }
  
  @media (max-width: 768px) {
    width: 100%; /* 1 карточка в ряд на мобильных */
    min-width: 100%;
  }
`;

// Текст при отсутствии карточек
export const EmptyMessage = styled.p`
  font-size: ${(props) => props.theme.fontSize};
  color: ${(props) => props.theme.colorBlack};
  opacity: 0.7;
  text-align: center;
  margin: 40px 0;
`;