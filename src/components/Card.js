import React from 'react'

function Card({name, movies}) {
  return (
    <article>
        <h2>{name}</h2>
        <ul>{movies.map(movie => <li key={movie}>{movie}</li>)}</ul>
    </article>
  )
}

export default Card