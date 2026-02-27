import styled from "styled-components";

export const Main = styled.main`
  flex: 1;
  width: 100%;
  max-width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.pagePadding};
  box-sizing: border-box;
`;