import { movies } from "../data";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const movieCards = movies.map(movie =><MovieCard key={movie.title} {...movie}/>)

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movieCards}
      </main>
    </>
  );
}

export default Home;
