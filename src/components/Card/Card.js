import React from 'react';
import './card.css'

const Card = ({id, poster_path, title, average_rating, release_date}) => {
  return (
    <div className="card" id={id} key={id}>
      <img src={poster_path} alt="movie poster"/>
      <div className="info">
        <h1 className="title">{title}</h1>
        <h2 className="date">Released: {release_date}</h2>
        <h2 className="rating">{average_rating.toFixed(2)}</h2>
      </div>
    </div>
  )
}

export default Card;