import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles";
import PageWrapper from "./components/layout/page-wrapper/page-wrapper";
import MainPage from "./components/pages/main-page";
import BuyPage from "./components/pages/buy-page";
import { AppRoute } from "./const";
import gallery from "./mocks/gallery";
import buyOptions from "./mocks/buyOptions";
import starList from "./mocks/starList";

function App() {
   return (
      <BrowserRouter>
         <GlobalStyle />
         <Routes>
            <Route path={AppRoute.MAIN} element={<PageWrapper />}>
               <Route index element={<MainPage stars={starList} />} />
               <Route
                  path={AppRoute.BUY.replace("/", "")}
                  element={<BuyPage gallery={gallery} buyOptions={buyOptions} />}
               />
            </Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;