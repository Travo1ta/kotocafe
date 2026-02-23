import React from "react";
import CafeGallery from "../blocs/cafe-gallery/cafe-gallery";
import Buy from "../blocs/buy/buy";

function BuyPage({ gallery, buyOptions }) {
  return (
    <>
      <CafeGallery gallery={gallery} />
      <Buy buyOptions={buyOptions} />
    </>
  );
}

export default BuyPage;