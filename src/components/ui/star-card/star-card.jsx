import React from "react";
import Title from "../title/title";
import { TitleSize } from "../title/constants";
import StarIcon from "../star-icon/star-icon";
import styled from "styled-components";

const StyledStarCard = styled.article`
  width: 353px;
  min-height: 525px;
  max-height: 525px; /* Фиксируем максимальную высоту */
  height: 100%; /* Добавляем высоту 100% */
  display: flex; /* Используем flexbox */
  flex-direction: column; /* Вертикальное расположение */
  padding: 20px;
  border-radius: 12px;
  background-color: #ffffff;
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledFigure = styled.figure`
  position: relative;
  margin: 0;
  margin-bottom: 10px;
  flex-shrink: 0; /* Фиксируем размер изображения */
  height: 313px; /* Фиксированная высота изображения */
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* cover для одинаковых пропорций */
  border-radius: 8px;
  background-color: #f5f5f5; /* Фон на случай прозрачных изображений */
`;

const StyledText = styled.p`
  margin-top: 7px;
  margin-bottom: 0;
  flex-grow: 1; /* Текст занимает оставшееся пространство */
  overflow-y: auto; /* Добавляем прокрутку если текст слишком длинный */
  font-size: ${(props) => props.theme.fontSize || "18px"};
  line-height: ${(props) => props.theme.lineHeight || "27px"};
  color: ${(props) => props.theme.colorBlack || "#000000"};
  max-height: 120px; /* Ограничиваем высоту текстового блока */
  
  /* Стили для скроллбара */
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 2px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 2px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const StyledStarIconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  
  .star-icon {
    display: block;
    height: 43px;
    padding: 8px 16px;
    font-size: 18px;
    line-height: 27px;
    font-weight: 700;
    color: #ffffff;
    box-sizing: border-box;
    border-radius: 8px 8px 8px 0;
    text-transform: uppercase;
    background-color: #7fc92e;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Контент занимает все доступное пространство */
  min-height: 150px; /* Минимальная высота для контента */
`;

function StarCard({ star }) {
   return (
      <StyledStarCard>
         <StyledFigure>
            <StyledImage
               src={star.image}
               width={313}
               height={320}
               alt={star.name}
            />
            <StyledStarIconWrapper>
               <StarIcon feature={star.feature} />
            </StyledStarIconWrapper>
         </StyledFigure>
         <CardContent>
            <Title size={TitleSize.SMALL} as="h3">{star.name}</Title>
            <StyledText>{star.about}</StyledText>
         </CardContent>
      </StyledStarCard>
   );
}

export default StarCard;