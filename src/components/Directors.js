import React from 'react';
import { directors } from '../data';

function Directors() {
  return (
    <div className="directors">
      <h1>Directors Page</h1>
      {directors.map((director) => (
        <div key={director.name}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie) => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors;
