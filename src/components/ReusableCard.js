

function Card({name, movies}) {
  const movieList = movies.map(movie => <li key={movie}>{movie}</li>)
  
  return (
    <article>
        <h2>{name}</h2>
        <ul>
            {movieList}
        </ul>
    </article>
  )
}

export default Card