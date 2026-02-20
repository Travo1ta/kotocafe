import React from "react";
import Title from "../../ui/title/title";
import StarCard from "../../ui/star-card/star-card";
import Button from "../../ui/button/button";
import { TitleSize } from "../../ui/title/constants";
import {
  StarsListSection,
  StarsContainer,
  StarItem,
  EmptyMessage
} from "./styles";

function StarsList({ stars }) {
  return (
    <StarsListSection>
      <Title size={TitleSize.BIG}>Наши звёзды</Title>
      
      {/* Проверяем наличие массива stars */}
      {stars?.length > 0 ? (
        <StarsContainer>
          {stars.map((star) => (
            <StarItem key={star.id}>
              <StarCard star={star} />
            </StarItem>
          ))}
        </StarsContainer>
      ) : (
        <EmptyMessage>Пока нет звёзд для отображения</EmptyMessage>
      )}
      
      <Button minWidth={353}>Купить билет</Button>
    </StarsListSection>
  );
}

export default StarsList;