import {Link} from 'react-router-dom'

function MovieCard({title}) {
  const genreList = genres.map(genre => <li key={genre}>{genre}</li>)
  
  return (
    <article>
        <h2>{title}</h2>
        {/* What should go here? */}
    </article>
  )
}

export default MovieCard