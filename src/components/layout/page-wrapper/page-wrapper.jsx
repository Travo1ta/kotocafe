import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Outlet } from "react-router-dom";
import { Main } from "./styles";

// Обёртка для контента страниц
function PageWrapper() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;