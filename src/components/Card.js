

function Card({name, list}) {
    const displayList = list.map(item => <li key={item}>{item}</li>)
  return (
    <article>
        <h2>{name}</h2>
        <ul>
            {displayList}
        </ul>
    </article>
  )
}

export default Card