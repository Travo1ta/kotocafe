import React from "react";
import logo from "../../../assets/logo.svg";
import "./style.css";

function Logo() {
  return (
    <a href="/" className="logo">
      <img 
        src={logo} 
        alt="Логотип Котокафе" 
        className="logo__image"
        width="40"
        height="40"
      />
      <span className="logo__text">Котокафе</span>
    </a>
  );
}

export default Logo;