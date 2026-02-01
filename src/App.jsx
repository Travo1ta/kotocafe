import React from "react";
import PageWrapper from "./components/layout/page-wrapper/page-wrapper";
import starList from "./mocks/starList";
import { GlobalStyle } from "./styles";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper stars={starList} />
    </>
  );
}