import React from "react";
import Title from "../../ui/title/title";
import StarCard from "../../ui/star-card/star-card";
import Button from "../../ui/button/button";
import { TitleSize } from "../../ui/title/constants";
import "./style.css";

function StarsList({ stars }) {
  return (
    <section className="star-list">
      <Title size={TitleSize.BIG}>Наши звёзды</Title>
      
      {/* Проверяем наличие массива stars */}
      {stars?.length > 0 ? (
        <ul className="star-list__list">
          {stars.map((star) => (
            <li className="star-list__item" key={star.id}>
              <StarCard star={star} /> {/* Передаем объект star целиком */}
            </li>
          ))}
        </ul>
      ) : (
        <p className="star-list__empty">Пока нет звёзд для отображения</p>
      )}
      
      <Button minWidth={353}>Купить билет</Button>
    </section>
  );
}

export default StarsList;