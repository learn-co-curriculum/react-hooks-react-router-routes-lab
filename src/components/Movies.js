import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      <div>
        {movies.map((film) => (
          <div key={film.title}>
            <h3>Name: {film.title}</h3>
            <p>Time: {film.time}</p>
            <p>Genres:</p>
            <ul>
              {film.genres.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
