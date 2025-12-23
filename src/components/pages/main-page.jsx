import React from "react";
import About from "../blocs/about/about";
import StarsList from "../blocs/stars-list/stars-list";


function MainPage({ stars }) {
  return (
       <>
      <About />
      <StarsList stars={stars}/>
    </>
  );
}

export default MainPage;