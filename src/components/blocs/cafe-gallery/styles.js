import styled from "styled-components";
import BaseSection from "../../../styled/section/section";
import Title from "../../ui/title/title";
import galleryBackground from "../../../assets/gallery-background.svg";

export const StyledSection = styled(BaseSection)`
  display: block;
  padding-top: 80px;
  background-color: ${(props) => props.theme.colorForDarkBackground};
  background-image: url(${galleryBackground});
  background-position: right top;
  background-size: 321px 305px;
  background-repeat: no-repeat;
  justify-content: center;
  position: relative;
  min-height: 400px;
`;

export const LeftImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 113px;
  height: 144px;
  z-index: 1;
`;

export const RightImage = styled.img`
  position: absolute;
  top: 77px;
  right: 0;
  width: 225px;
  height: 222px;
  z-index: 1;
`;

export const StyledTitle = styled(Title)`
  text-align: center;
  margin-bottom: 64px;
  position: relative;
  z-index: 2;
`;