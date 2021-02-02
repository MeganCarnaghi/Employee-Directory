import React from "react";
import "../styles/Header.css";

// Header with use instructions
function Header() {
  return (
    <div className="header">
      <h1 class="header__h1">Employee Directory</h1>
      <p className="header__paragraph">
        Click on the headings to sort the data or use the search box to narrow
        your results.
      </p>
    </div>
  );
}

export default Header;
