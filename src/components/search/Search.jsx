import React from "react";
import "./search.css";

function Search({ handleSearch }) {
  return (
    <div className="searchcontainer">
      <div className="types">
        <div className="typeoption">Buy</div>
        <div className="typeoption">Rent</div>
        <div className="typeoption">Commercial</div>
        <div className="typeoption">Coworking</div>
        <div className="typeoption">Projects</div>
      </div>
      <div className="searchcontainerline">
        <span className="box1">All Residential</span>
        <span className="search">
          <input type="text" placeholder="Search..." />
        </span>
        <button className="searchButton" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
