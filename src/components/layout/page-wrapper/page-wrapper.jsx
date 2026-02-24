import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import "./style.css";

function PageWrapper({ children }) {
   return (
      <>
         <Header />
         <main className="page-wrapper__main">
            {children}
         </main>
         <Footer />
      </>
   );
}

export default PageWrapper;