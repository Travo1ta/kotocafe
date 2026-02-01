import React from "react";
import { CatFeature } from "./constants";
import styled from "styled-components";

const StyledStarIcon = styled.span`
  /* Базовые стили для иконки */
  display: inline-block;
  font-weight: bold;
  padding: 8px 16px;
  font-size: 18px;
  line-height: 27px;
  font-weight: 700;
  color: #ffffff;
  border-radius: 8px;
  text-transform: uppercase;
  background-color: ${props => props.bgcolor || "#000"};
`;

function StarIcon({ className = "", feature }) {
  let options;

  switch (feature) {
    case CatFeature.NEW:
      options = {
        text: "New",
        bgcolor: "#ffb334"
      };
      break;
    case CatFeature.SOFT:
      options = {
        text: "Ласковый",
        bgcolor: "#7fc92e"
      };
      break;
    default:
      options = {
        text: "",
        bgcolor: "#000"
      };
      break;
  }

  return options.text ? (
    <StyledStarIcon
      className={`star-icon ${className}`}
      bgcolor={options.bgcolor}
    >
      {options.text}
    </StyledStarIcon>
  ) : null;
}

export default StarIcon;