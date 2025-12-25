import React from "react";
import Title from "../title/title";
import { TitleSize } from "../title/constants";
import StarIcon from "../star-icon/star-icon";
import "./style.css";

function StarCard({ star }) {
  return (
    <article className="star-card">
      <figure className="star-card__figure">
        <img
          src={star.image}
          className="star-card__image"
          width={313}
          height={320}
          alt={star.name}
        />
        {/* Добавляем StarIcon с feature из star */}
        <StarIcon 
          className="star-card__icon"
          feature={star.feature} 
        />
      </figure>
      <Title size={TitleSize.SMALL} level="h3">{star.name}</Title>
      <p className="star-card__text">{star.about}</p>
    </article>
  );
}

export default StarCard;