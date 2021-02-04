import React from 'react';
import './card.css'

const Card = ({id, poster_path, title, average_rating, release_date}) => {
  const convertDate = date => {
    const dateSplit = date.split('-')
    const dateJoined =  dateSplit.join(',')
    const dateObject = new Date(dateJoined)
    const dateArray = dateObject.toDateString().split(' ')
    const monthYear = [dateArray[1], dateArray[3]]
    return monthYear.join(' ')
  }

  return (
    <div className="card" id={id} key={id}>
      <img src={poster_path} alt="movie poster"/>
      <div className="info">
        <h1 className="title">{title}</h1>
        <h2 className="date">{convertDate(release_date)}</h2>
        <h2 className="rating">{average_rating.toFixed(2)}</h2>
      </div>
    </div>
  )
}

export default Card;