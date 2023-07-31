import { actors } from "../data";
import Card from "../components/Card";
import NavBar from "../components/NavBar";


function Actors() {
  const actorList = actors.map(actor => <Card key={actor.name} name={actor.name} movies={actor.movies} />)

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorList}
      </main>
    </>
  );
}

export default Actors;
