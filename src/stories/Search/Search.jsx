import React from "react";
import { ReactComponent as SearchIcon } from "../assets/SearchIcon.svg";
import "./Search.css";

const Search = ({ size, isLeft }) => {

  return (
    <div className={`search-container ${size}`}>
      {isLeft && <SearchIcon className={`search-left-icon ${size}`} />}
      <input
        type="text"
        placeholder="Search"
        className={`search-input ${size}`}
      />
      {!isLeft && <SearchIcon className={`search-icon ${size}`} />}
    </div>
  );
};

export default Search;
