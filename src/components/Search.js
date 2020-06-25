import React, { useState, useEffect } from "react";
import "../index.css";

export default function Search(props) {

  const [keyword, searchGif] = useState("");
  const [searchInput, setSearchVal] = useState("");

  const searchHandler = () => {
    searchInput ? searchGif(searchInput) : "";
  };

  const inpChangeHandler = () => {
    let searchVal = event.target.value;
    searchVal ? setSearchVal(searchVal) : "";
  };


  return (
    <div
      className={"contentArea"}
    >
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="Search for GIFs or stickers"
            onChange={inpChangeHandler}
          />
          <button type="submit" className="button" onClick={searchHandler}>
            SUBMIT
          </button>
        </div>

    </div>
  );
}
