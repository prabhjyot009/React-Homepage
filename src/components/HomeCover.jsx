import React from "react";
import "./css/Home.css";
import banner from "../img/banner-img.jpg";
import logo from "../img/logo.png";

const HomeCover = () => {
  return (
    <div className="home">
      <div className="banner-container">
        <img
          src={banner}
          alt="Banner of Clothing store"
          className="banner-img"
        />
        <div className="banner-logo">
          <img src={logo} alt="" />
        </div>
        <p>
          Clothes that talk on behalf of you. Something for every occassion.
        </p>
      </div>
    </div>
  );
};

export default HomeCover;
