import styled from "styled-components";
import Button from "../../ui/button/button";

export const StyledButton = styled(Button)`
  background-color: transparent;
  color: ${(props) => props.theme.colorBlackForText};
  border: 2px solid ${(props) => props.theme.colorForButton};
  
  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colorForButton};
    color: ${(props) => props.theme.colorWhite};
  }
`;