import { movies } from "../data";
import MovieCard from "../components/MovieCard";

function Home() {
  const movieList = movies.map(movie => <MovieCard key={movie.title} title={movie.title} />)

  return (
    <>
      <header>
        {/* What component should go here? */}
      </header>
      <main>
        <h1>Home Page</h1>
        {movieList}
      </main>
    </>
  );
}

export default Home;
