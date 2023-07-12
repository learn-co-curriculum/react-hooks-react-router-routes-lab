import NavBar from "../components/NavBar";
import Card from "../components/Card";
import { directors } from "../data";

function Directors() {
  const directorCards = directors.map(director => <Card key={director.name} {...director} />)
  
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directorCards}
      </main>
    </>
  );
}

export default Directors;
