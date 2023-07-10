import React from "react";
import { movies } from "../data";
import NavBar from "./NavBar";

function Movies() {
  const movieList = movies.map(movie =>{
    return(
      <div key={movie.title}>
        {movie.title}
        {movie.time}
        <ul>
          {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
        </ul>
      </div>
    )
  })
  return <div>
    {/* <NavBar /> */}
      <h1>Movies Page</h1>
      {movieList}
    </div>;
}

export default Movies;
