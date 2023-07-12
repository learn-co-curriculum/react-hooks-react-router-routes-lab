import {Link} from 'react-router-dom'

function MovieCard({title, genres, time}) {
  const infoList = genres.map(genre => <li key={genre}>{genre}</li>)
  
  return (
    <article>
        <h2>{title}</h2>
        <p>{time} minutes</p>
        <p><Link to={`/movie/${title}`}>Details</Link></p>
        <ul>
            {infoList}
        </ul>
    </article>
  )
}

export default MovieCard