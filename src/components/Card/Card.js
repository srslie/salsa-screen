import React from 'react';
import './card.css'

const Card = (movie, showSelectedMovie) => {

  return (
    <div className="card" id={movie.id} key={movie.id}>
      <img src={movie.poster_path} alt="movie poster" onClick={() => showSelectedMovie(movie)} />
      <div className="info">
        <h1 className="card-title">{movie.title}</h1>
        <h2 className="card-date">{movie.release_date}</h2>
        <h2 className="card-rating">🌶 {movie.average_rating}</h2>
      </div>
    </div>
  )
}

export default Card;