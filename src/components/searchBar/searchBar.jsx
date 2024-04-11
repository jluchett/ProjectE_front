
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './searchBar.css'

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Buscar..." />
      <button type="submit">Buscar</button>
    </div>
  );
};

export default SearchBar;
