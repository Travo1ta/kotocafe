import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";
import { defaultTheme } from "./theme/default";
import PageWrapper from "./components/layout/page-wrapper/page-wrapper";
import MainPage from "./components/pages/main-page";
import BuyPage from "./components/pages/buy-page";
import ScrollToTop from "./components/ui/scroll-top/scroll-top";
import { AppRoute } from "./const";
import gallery from "./mocks/gallery";
import buyOptions from "./mocks/buyOptions";
import starList from "./mocks/starList";

function App() {
   return (
      <BrowserRouter>
         <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <ScrollToTop />
            <Routes>
               <Route path={AppRoute.MAIN} element={<PageWrapper />}>
                  <Route index element={<MainPage stars={starList} />} />
                  <Route
                     path={AppRoute.BUY.replace(AppRoute.MAIN, "")}
                     element={<BuyPage gallery={gallery} buyOptions={buyOptions} />}
                  />
               </Route>
            </Routes>
         </ThemeProvider>
      </BrowserRouter>
   );
}

export default App;