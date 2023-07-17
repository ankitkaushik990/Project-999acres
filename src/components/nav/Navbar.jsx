import React from "react";
import "./nav.css";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <div className="navbar flex">
      <div className="start_nav flex">
        <img src={logo} />
        <h5>Buy in Dwarka Delhi</h5>
      </div>
      <div className="middle_nav">
        <ul className="flex">
          <li>For Buyers</li>
          <li>For Buyers</li>
          <li>For Buyers</li>
          <li>For Buyers</li>
          <li>For Buyers</li>
        </ul>
      </div>
      <div className="navbar__whitediv">Post Property</div>
    </div>
  );
}

export default Navbar;
