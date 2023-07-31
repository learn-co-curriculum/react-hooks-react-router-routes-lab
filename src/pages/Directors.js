import { directors } from "../data";
import Card from "../components/Card";

function Directors() {
  const directorList = directors.map(director => <Card key={director.name} name={director.name} movies={director.movies}/>)
  
  return (
    <>
      <header>
        {/* What component should go here? */}
      </header>
      <main>
        <h1>Directors Page</h1>
        {directorList}
      </main>
    </>
  );
}

export default Directors;
