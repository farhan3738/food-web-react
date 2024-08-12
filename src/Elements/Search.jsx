import React from 'react';
import './Search.css';

function Search() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <input type="text" placeholder="Search" className="hero-search" />
        <button className="hero-button">Search</button>
      </div>
    </div>
  );
};

export default Search;
