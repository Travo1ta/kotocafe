
import React from "react";
import Title from "../../ui/title/title";
import StarCard from "../../ui/star-card/star-card";
import Button from "../../ui/button/button";
import { TitleSize } from "../../ui/title/constants";
import "./style.css";

function StarsList() {
  return (
    <section className="star-list">
      <Title size={TitleSize.BIG}>Наши звёзды</Title>
      <ul className="star-list__list" >
        <li className="star-list__item">
          <StarCard />
        </li>
      </ul>
      <Button minWidth={353}>Купить билет</Button>
    </section>
  );
}

export default StarsList;