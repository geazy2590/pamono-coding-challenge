import React, { useState } from "react";


const SearchMovie = (props) => {
  const [searchString, setSearchString] = useState("");
  
  const searchMovieStringChange = (e) => {
    setSearchString(e.target.value);
  }

  const resetMovieSearchString = () => {
    setSearchString("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchString);
    resetMovieSearchString();
  }

  return (
    <div className="searchContainer">
        <h4>Movies Search</h4>
        <div className="input-group searchContainer__displayList">
            <input className="form-control width100" 
                type="text"
                placeholder="Search for a Movie..." 
                onChange={searchMovieStringChange}
                value={searchString}/>
            <span className="input-group-btn">
                <button className="btn btn-info searchContainer__displayList--submitButton" onClick={callSearchFunction} type="submit">Search Movies</button>
            </span>
        </div>
    </div>
    );
}

export default SearchMovie;