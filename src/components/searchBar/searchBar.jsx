// SearchBar.js
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./searchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Buscar..." className="search-input" />
      <button type="submit" className="search-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-2 -5 24 24"
          width="30"
          height="30"
        >
          <path
            d="M18.5 17.9l-4.2-4.2c1-1.4 1.6-3.1 1.6-5 0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8c1.9 0 3.6-.6 5-1.6l4.2 4.2c.3.3.7.4 1.1.4s.8-.1 1.1-.4c.6-.6.6-1.5 0-2.1zM2 10c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6z"
          />
        </svg>
      </button>
    </div>
  ); 
};

export default SearchBar;
