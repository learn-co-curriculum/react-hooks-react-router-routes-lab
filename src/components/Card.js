function Card({title, list, time = null}) {
    const infoList = list.map(item => <li key={item}>{item}</li>)
  return (
    <div>
        <h2>{title}</h2>
        {time ? <h3>{time} minutes</h3>: time}
        <ul>
            {infoList}
        </ul>
    </div>
  )
}

export default Card