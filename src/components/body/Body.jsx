import React from "react";
import bg from "./img/bg.png";
import "./body.css";
// import Navbar from "../nav/Navbar";

function Body() {
  return (
    <>
      <div className="background">
        <img src={bg} alt="bgimg" className="image" />
      </div>

      {/* <div class="n">
        <div class="inner_div"></div>
        <div class="inner_2nd_div"></div>
      </div> */}
    </>
  );
}

export default Body;
