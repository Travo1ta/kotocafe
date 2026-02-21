import styled from "styled-components";
import BaseSection from "../../../styled/section/section";
import Title from "../../ui/title/title";

// Импортируем SVG как строки с путем
const galleryBackgroundUrl = "/src/assets/gallery-background.svg";
const galleryLeftUrl = "/src/assets/gallery-left.svg";
const galleryRightUrl = "/src/assets/gallery-right.svg";

export const StyledSection = styled(BaseSection)`
  display: block;
  padding-top: 80px;
  background-color: ${(props) => props.theme.colorForDarkBackground};
  background-image: url(${galleryBackgroundUrl});
  background-position: right top;
  background-size: 321px 305px;
  background-repeat: no-repeat;
  justify-content: center;
  position: relative;
  z-index: 1;

  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 113px;
    height: 144px;
    content: "";
    background: url(${galleryLeftUrl}) no-repeat center;
    background-size: contain;
    z-index: 2;
  }

  &::after {
    position: absolute;
    top: 77px;
    right: 0;
    width: 225px;
    height: 222px;
    content: "";
    background: url(${galleryRightUrl}) no-repeat center;
    background-size: contain;
    z-index: 2;
  }
`;

export const StyledTitle = styled(Title)`
  text-align: center;
  margin-bottom: 64px;
  position: relative;
  z-index: 3;
`;