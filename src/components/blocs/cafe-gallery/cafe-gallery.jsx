import React from "react";
import { useNavigate } from "react-router-dom";
import { TitleSize } from "../../ui/title/constants";
import Gallery from "../../ui/gallery/gallery";
import Button from "../../ui/button/button";
import {
   StyledSection,
   StyledTitle,
   GalleryWrapper,
   ButtonWrapper
} from "./styles";
import { AppRoute } from "../../../const";

function CafeGallery({ gallery }) {
   const navigate = useNavigate();

   console.log("CafeGallery рендерится");

   const handleBuyClick = (e) => {
      e.preventDefault();
      e.stopPropagation(); // предотвращаем всплытие события
      console.log("✅ КЛИК ПО КНОПКЕ В ГАЛЕРЕЕ");
      console.log("Переход на:", AppRoute.BUY);
      navigate(AppRoute.BUY);
   };

   return gallery?.length ? (
      <StyledSection>
         <StyledTitle level={2} size={TitleSize.BIG}>
            Галерея нашего кафе
         </StyledTitle>
         <GalleryWrapper>
            <Gallery slides={gallery} />
         </GalleryWrapper>
         <ButtonWrapper>
            <Button
               minWidth={260}
               onClick={handleBuyClick}
            >
               Купить билет
            </Button>
         </ButtonWrapper>
      </StyledSection>
   ) : null;
}

export default CafeGallery;