import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import BuyPage from "../../pages/buy-page"; // Переключили на BuyPage
import "./style.css";

// Обёртка для контента страниц
function PageWrapper(prop) {
   return (
      <>
         <Header />
         <main className="page-wrapper__main">
           {/* <MainPage {...prop} />  */}
            <BuyPage {...prop} /> {/* Теперь рендерится BuyPage */}
         </main>
         <Footer />
      </>
   );
}

export default PageWrapper;