import styled from "styled-components";
import BaseSection from "../../../styled/section/section";
import Title from "../../ui/title/title";

export const StyledSection = styled(BaseSection)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: ${(props) => props.theme.colorForLightBackground};
`;

export const StyleTitle = styled(Title)`
  text-align: center;
  margin-bottom: 40px;
`;

export const FormItem = styled.div`
  margin-bottom: ${(props) => props.$bottom || 20}px;
`;

export const Price = styled.span`
  display: block;
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.theme.colorForButton};
  margin-bottom: 20px;
`;