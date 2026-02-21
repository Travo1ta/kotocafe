import React, { useEffect } from "react";
import { TitleSize } from "../../ui/title/constants";
import Gallery from "../../ui/gallery/gallery";
import { StyledSection, StyledTitle, GalleryWrapper } from "./styles";

function CafeGallery({ gallery }) {
  useEffect(() => {
    console.log("CafeGallery received gallery:", gallery);
  }, [gallery]);

  return (
    <StyledSection>
      <StyledTitle level={2} size={TitleSize.BIG}>
        Галерея нашего кафе
      </StyledTitle>
      <GalleryWrapper>
        <Gallery slides={gallery} />
      </GalleryWrapper>
    </StyledSection>
  );
}

export default CafeGallery;