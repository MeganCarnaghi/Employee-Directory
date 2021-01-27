import React from "react";
import "../styles/Header.css";

// Header with use instructions
function Header() {
  return (
    <div className="header">
      <h1>Employee Directory</h1>
      <p>
        Click on the Name or DOB headings to filter or use the search box to
        narrow your results.
      </p>
    </div>
  );
}

export default Header;
