import React from "react";
import { TitleSize } from "../../ui/title/constants";
import { StyledSection, StyledTitle } from "./styles";

function CafeGallery() {
  return (
    <StyledSection>
      <StyledTitle level={2} size={TitleSize.BIG}>
        Галерея нашего кафе
      </StyledTitle>
    </StyledSection>
  );
}

export default CafeGallery;