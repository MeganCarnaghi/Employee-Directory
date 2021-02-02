import React from "react";
import "../styles/SearchBar.css";

function SearchBar({ handleInputChange, handleFormSubmit, search }) {
  return (
    <form className="form">
      <div className="form-group mt-5 mb-5">
        <button onClick={handleFormSubmit} className="form__button">
          Search
        </button>
        <input
          onChange={handleInputChange}
          name="search"
          type="text"
          className="form-control form-control-lg"
          placeholder="Start typing to search for an employee"
          id="search"
          value={search}
        />
      </div>
    </form>
  );
}

export default SearchBar;
