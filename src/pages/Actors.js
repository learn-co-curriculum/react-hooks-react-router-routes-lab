import { actors } from "../data";
import Card from "../components/Card";


function Actors() {
  const actorList = actors.map(actor => <Card key={actor.name} name={actor.name} movies={actor.movies} />)

  return (
    <>
      <header>
        {/* What component should go here? */}
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorList}
      </main>
    </>
  );
}

export default Actors;
