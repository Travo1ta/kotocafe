import React from "react";
import Title from "../title/title";
import { TitleSize } from "../title/constants";
import StarIcon from "../star-icon/star-icon";
import styled from "styled-components";

const StyledStarCard = styled.article`
  width: 353px;
  min-height: 525px;
  padding: 20px;
  border-radius: 12px;
  background-color: #ffffff;
  box-sizing: border-box;
`;

const StyledFigure = styled.figure`
  position: relative;
  margin: 0;
  margin-bottom: 10px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 313px;
  object-fit: contain;
  border-radius: 8px;
`;

const StyledText = styled.p`
  margin-top: 7px;
  margin-bottom: 0;
`;

const StyledStarIconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  
  .star-icon {
    display: block;
    height: 43px;
    padding: 8px 16px;
    font-size: 18px;
    line-height: 27px;
    font-weight: 700;
    color: #ffffff;
    box-sizing: border-box;
    border-radius: 8px 8px 8px 0;
    text-transform: uppercase;
    background-color: #7fc92e;
  }
`;

function StarCard({ star }) {
   return (
      <StyledStarCard>
         <StyledFigure>
            <StyledImage
               src={star.image}
               width={313}
               height={320}
               alt={star.name}
            />
            <StyledStarIconWrapper>
               <StarIcon feature={star.feature} />
            </StyledStarIconWrapper>
         </StyledFigure>
         <Title size={TitleSize.SMALL} as="h3">{star.name}</Title>
         <StyledText>{star.about}</StyledText>
      </StyledStarCard>
   );
}

export default StarCard;