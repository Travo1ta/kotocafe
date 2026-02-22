import styled from "styled-components";
import { Swiper } from "swiper/react";
import Button from "../button/button";

export const SliderWrapper = styled.div`
  margin-top: 20px;
  position: relative;
  width: 100%;
  max-width: 728px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  max-width: 728px;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  background-color: #f0f0f0;
  min-height: 408px;

  .swiper-button-next,
  .swiper-button-prev {
    color: ${(props) => props.theme.colorWhite};
    background-color: rgba(0, 0, 0, 0.3);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    
    &::after {
      font-size: 20px;
    }
    
    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledSwiperMini = styled(Swiper)`
  width: 100%;
  max-width: 728px;
  margin: 0 auto;
  
  .swiper-slide {
    transition: opacity 0.3s ease;
    cursor: pointer;
    
    &-thumb-active {
      opacity: 1;
    }
    
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const StyleSlide = styled.img`
  width: 100%;
  height: 408px;
  object-fit: cover;
  border-radius: 10px;
  display: block;
  background-color: #ddd;
`;

export const StyleSlideMini = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
  display: block;
  background-color: #ddd;
  filter: brightness(${(props) => (props.$active ? "100%" : "50%")});
  transition: filter 0.3s ease;
`;

export const StyledButtonLeft = styled(Button)`
  position: absolute;
  left: -50px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 40px;
  height: 40px;
  min-width: auto;
  padding: 0;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colorForButton};
  color: ${(props) => props.theme.colorWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: ${(props) => props.theme.colorForButtonHover};
  }
  
  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
  }
`;

export const StyledButtonRight = styled(StyledButtonLeft)`
  left: auto;
  right: -50px;
`;