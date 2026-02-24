import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";
import { defaultTheme } from "./theme/default";
import PageWrapper from "./components/layout/page-wrapper/page-wrapper";
import MainPage from "./components/pages/main-page";
import BuyPage from "./components/pages/buy-page";
import gallery from "./mocks/gallery";
import buyOptions from "./mocks/buyOptions";
import starList from "./mocks/starList";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <PageWrapper>
          <Routes>
            <Route 
              path="/" 
              element={<MainPage stars={starList} />} 
            />
            <Route 
              path="/buy" 
              element={<BuyPage gallery={gallery} buyOptions={buyOptions} />} 
            />
          </Routes>
        </PageWrapper>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;