import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>{
    <div>
      <h1>Actors Page</h1>
      <div>
        {actors.map((cast) => 
        <div key={cast.name}>
          <h3>Name: {cast.name}</h3>
          <p>Movies:</p>
          <ul>
            {cast.movies.map((movies) => 
            <li key={movies}>{movies}</li>
            )
            }
          </ul>

        </div>
        )

        }
      </div>
    </div>
    /*{code here}*/}</div>;
}

export default Actors;
