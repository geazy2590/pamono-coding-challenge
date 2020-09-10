import React, { useState, useEffect } from "react";
import './App.css';
import Search from "./components/Search";
import {ListGroup} from 'react-bootstrap'


const App = () => {
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

    const search = searchValue => {
    setErrorMessage(null);

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4dc00ad8`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
        } else {
          setErrorMessage(jsonResponse.Error);
        }
      });
  	};

    
    return (
     <div className="App">
      <Search search={search} />
      <div className="movies">
        {errorMessage ? (
          <ListGroup.Item action variant="secondary" className="searchContainer__displayList--listGroup">{errorMessage}</ListGroup.Item>
         ) : (
          movies.map((movie) => (
            <ListGroup.Item key={movie.imdbID} action variant="secondary" className="searchContainer__displayList--listGroup">
            {movie.Title}
            </ListGroup.Item>
          ))
          
        )}
      </div>
      
    </div>
  );
};


export default App;