import React from "react";
import Card from "../components/Card";
import { directors } from "../data";

function Directors() {
  const directorCards = directors.map(director => <Card key={director.name} title={director.name} list={director.movies} />)
  
  return (
    <div>
      <h1>Directors Page</h1>
      {directorCards}
    </div>
  );
}

export default Directors;
