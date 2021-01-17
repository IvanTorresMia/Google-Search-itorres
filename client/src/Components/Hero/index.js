import React from "react";
import './style.css'

function Hero() {
  return (
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-4 text-center mt-5 mb-3">Google Search</h1>
        <img className="logo" src="./googleLogo.png"></img>
      </div>
    </div>
  );
}

export default Hero;
