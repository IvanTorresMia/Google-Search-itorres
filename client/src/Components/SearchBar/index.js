import React from "react";
import "style.css";

function SearchBar({ handleSearchChange, searchBooks }) {
  return (
    <div className="container mb-5">
      <div className="card">
        <input
          className="form-control text-center"
          onChange={handleSearchChange}
        />
      </div>
      <button className="btn btn-primary mt-4" onClick={searchBooks}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
