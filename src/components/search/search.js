import React from "react";
import "./search.scss";
const Search = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Type movie title or actor's name to search"
      className="search form-control"
      onChange={e => {
        onSearch(e.target.value);
      }}
    />
  );
};
export default Search;
