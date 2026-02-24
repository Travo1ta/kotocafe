import React from "react";
import About from "../blocs/about/about";
import CafeGallery from "../blocs/cafe-gallery/cafe-gallery";
import Buy from "../blocs/buy/buy";

function BuyPage({ gallery, buyOptions }) {
  return (
    <>
      <About />
      <CafeGallery gallery={gallery} />
      <Buy buyOptions={buyOptions} />
    </>
  );
}

export default BuyPage;