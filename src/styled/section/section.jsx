import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  position: relative;
  box-sizing: border-box;
`;

export default StyledSection;