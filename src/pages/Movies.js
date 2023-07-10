import React from "react";
import { movies } from "../data";
import Card from "../components/Card";

function Movies() {
  const movieCards = movies.map(movie =><Card key={movie.title} title={movie.title} list={movie.genres} time={movie.time}/>)
  return <div>
    {/* <NavBar /> */}
      <h1>Movies Page</h1>
      {movieCards}
    </div>;
}

export default Movies;
