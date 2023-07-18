import React from "react";
import "./result.css";
import logo from "../../assets/logo.png";
import resultData from "./resultData.json";

function Result() {
  return (
    <>
      <div className="result">
        <div className="navbar__wrapper">
          <div className="navbar__start_nav">
            <img src={logo} className="result_nav_img" alt="Logo" />
            <div className="search_container">
              <input
                type="text"
                placeholder="Search..."
                className="search_input"
              />
              <button className="search_button">Search</button>
            </div>
          </div>
          <div className="navbar__whitediv">Post Property</div>
        </div>

        {resultData.map((result, index) => (
          <div className="home_div" key={index}>
            <img src={result.imgSrc} alt="Result Image" />
            <div className="home_card">
              <span>{result.description}</span>
              <ul className="A">
                <li>{result.price}</li>
                <li>{result.area}</li>
                <li>{result.flatType}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Result;
