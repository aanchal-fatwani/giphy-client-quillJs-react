import React, { useState, useEffect } from "react";
import "../index.css";

export default function Search(props) {

  const [searchResults, setSearchResults] = useState([]);
  const [keyword, searchGif] = useState("");
  const [searchInput, setSearchVal] = useState("");
  const [offset, setOffset] = useState(0);

  const searchHandler = () => {
    searchInput ? searchGif(searchInput) : "";
  };

  const inpChangeHandler = () => {
    let searchVal = event.target.value;
    searchVal ? setSearchVal(searchVal) : "";
  };

  const nextHandler = () => {
    let currOffset = offset + 18;
    setOffset(currOffset);
  };

  useEffect(() => {

    if (keyword) {
      fetch(`http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=dc6zaTOxFJmzC&offset=${offset}&limit=18`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((response) => {
          response.data && setSearchResults([...searchResults,...response.data]);
          response.message && alert(response.message);
        })
        .catch((error) => console.log(error));

    }
  }, [keyword, offset]);
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
  
      {searchResults.length ? (
        <>
          <div className="gifDisplay">
            {searchResults.map((u, index) => (
              <div
                key={index}
              >
                {u.images && (
                  <img src={u.images.fixed_height_small.url} className="gifs" />
                )}
              </div>
            ))}
          </div>
          <div className="button nextBtn" onClick={nextHandler}>
            NEXT
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
