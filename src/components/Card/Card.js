import React from 'react';

const Card = ({id, poster_path, title, average_rating, release_date}) => {
  return (
    <div className="card" id={id} key={id}>
      <img src={poster_path} alt="movie poster"/>
      <h1 className="title">{title}</h1>
      <h2 className="date">{release_date}</h2>
      <h2 className="rating">{average_rating}</h2>
    </div>
  )
}

export default Card;