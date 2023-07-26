import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
      <h1> Directors Page</h1>
      <div>
        {directors.map((names) => 
        <div key={names.name}>
          <h3>Name: {names.name}</h3>
          <p>Movies:</p>
          <ul>
          {names.movies.map((movies) => (
                <li key={movies}>{movies}</li>
              ))}
          </ul>
        </div> 
        )

        }
      </div>

      </div>;
} 
export default Directors;
