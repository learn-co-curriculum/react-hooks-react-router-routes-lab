import React from "react";
import { actors } from "../data";
import Card from "../components/Card";

function Actors() {
  const actorCards = actors.map(actor => <Card key={actor.name} title={actor.name} list={actor.movies} />)

  return (
    <div>
      <h1>Actors Page</h1>
      {actorCards}
    </div>
  );
}

export default Actors;
