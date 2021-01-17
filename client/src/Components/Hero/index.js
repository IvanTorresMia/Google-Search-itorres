import React from "react";
import './style.css'

function Hero() {
  return (
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-4 text-center mt-5 mb-3">Google Book Search</h1>
        <img className="logo" src="./googleLogo.png"></img>
        <p className="lead text-center mt-3">Search a book and save it</p>
      </div>
    </div>
  );
}

export default Hero;
