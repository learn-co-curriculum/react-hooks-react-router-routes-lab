import {Link} from 'react-router-dom'

function MovieCard({title, genres, time}) {
  const genreList = genres.map(genre => <li key={genre}>{genre}</li>)
  
  return (
    <article>
        <h2>{title}</h2>
        <p>{time} minutes</p>
        <ul>
            {genreList}
        </ul>
    </article>
  )
}

export default MovieCard