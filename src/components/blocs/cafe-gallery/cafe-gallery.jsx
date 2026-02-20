import React from "react";
import { TitleSize } from "../../ui/title/constants";
import { StyledSection, StyledTitle, LeftImage, RightImage } from "./styles";
import galleryLeft from "../../../assets/gallery-left.svg";
import galleryRight from "../../../assets/gallery-right.svg";

function CafeGallery() {
  return (
    <StyledSection>
      <LeftImage src={galleryLeft} alt="" />
      <RightImage src={galleryRight} alt="" />
      <StyledTitle level={2} size={TitleSize.BIG}>
        Галерея нашего кафе
      </StyledTitle>
    </StyledSection>
  );
}

export default CafeGallery;