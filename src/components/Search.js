import React from "react";

function Search({ onSearchChange, onSearchSubmit }) {

  function handleSubmit(e) {
    e.preventDefault();
    onSearchSubmit()
  }

  
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        // value={searchValue}
        onChange={onSearchChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
