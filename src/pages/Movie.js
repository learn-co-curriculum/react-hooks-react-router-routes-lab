import { movies } from "../data";
import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar";

function Movie() {
  const params = useParams()
  
  const movieInfo = movies.find(movie => movie.title === params.title)

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movieInfo.title}</h1>
        <p>
          {movieInfo.genres.map(genre => <span key={genre}>{genre}</span>)}
        </p>
      </main>
    </>
  );
}

export default Movie;
