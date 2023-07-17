import React, { useState } from "react";
import Body from "./components/body/Body";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import Search from "./components/search/Search";
import Result from "./components/result/Result";

function App() {
  const [showResult, setShowResult] = useState(false);

  const handleSearch = () => {
    setShowResult(true);
  };

  if (showResult) {
    return <Result />;
  }

  return (
    <>
      {showResult ? null : (
        <>
          <Navbar />
          <Body />
          <Search handleSearch={handleSearch} />
        </>
      )}
    </>
  );
}

export default App;
