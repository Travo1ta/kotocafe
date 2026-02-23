import React from "react";
import { TitleSize } from "../../ui/title/constants";
import Gallery from "../../ui/gallery/gallery";
import { StyledSection, StyledTitle, GalleryWrapper } from "./styles";

// Галерея «Котокафе».
function CafeGallery({ gallery }) {
  return gallery?.length ? (
    <StyledSection>
      <StyledTitle level={2} size={TitleSize.BIG}>
        Галерея нашего кафе
      </StyledTitle>
      <GalleryWrapper>
        <Gallery slides={gallery} />
      </GalleryWrapper>
    </StyledSection>
  ) : null;
}

export default CafeGallery;