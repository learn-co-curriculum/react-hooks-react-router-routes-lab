import { actors } from "../data";
import NavBar from "../components/NavBar";
import Card from "../components/Card";

function Actors() {
  const actorCards = actors.map(actor => <Card key={actor.name} {...actor} />)

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorCards}
      </main>
    </>
  );
}

export default Actors;
