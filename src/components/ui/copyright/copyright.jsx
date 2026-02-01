import React from "react";
import styled from "styled-components";

const StyledCopyright = styled.span`
  min-height: 43px;
  min-width: 148px;
  max-width: 700px;
  padding: 8px 12px;
  font-size: 18px;
  background-color: #fff6d9;
  border-radius: 5px;
  vertical-align: middle;
  text-align: center;
  box-sizing: border-box;
`;

function Copyright({ children = "Создано 2021" }) {
  return <StyledCopyright>{children}</StyledCopyright>;
}

export default Copyright;