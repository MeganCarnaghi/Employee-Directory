import React from "react";
import "../styles/SearchBar.css";

// Search Bar
function SearchBar(props) {
  return (
    <div className="row justify-content-center">
      <form>
        <input
          type="text"
          className="form-control"
          value={props.search}
          onChange={props.handleChange}
          placeholder="Start typing a name, email, etc."
        />
      </form>
    </div>
  );
}

export default SearchBar;
