import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import BuyPage from "../../pages/buy-page";
import "./style.css";

function PageWrapper({ gallery, buyOptions }) {
   return (
      <>
         <Header />
         <main className="page-wrapper__main">
            <BuyPage gallery={gallery} buyOptions={buyOptions} />
         </main>
         <Footer />
      </>
   );
}

export default PageWrapper;