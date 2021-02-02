import React from "react";
import Header from "./components/Header";
import SearchContainer from "./components/DataContainer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <SearchContainer />
      </div>
    </>
  );
}

export default App;
