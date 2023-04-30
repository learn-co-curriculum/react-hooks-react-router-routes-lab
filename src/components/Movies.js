import React from 'react';
import { movies } from '../data';

function Movies() {
  return (
    <div className="movies">
      <h1>Movies Page</h1>
      {movies.map((movie) => (
        <div key={movie.title}>
          <h2>{movie.title}</h2>
          <p>{movie.time}</p>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Movies;
