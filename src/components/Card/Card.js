import React from 'react';
import './card.css'
import {Link} from 'react-router-dom'

const Card = (movie, showSelectedMovie) => {

  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="card" id={movie.id} key={movie.id}>
        <img src={movie.poster_path} alt="movie poster" onClick={() => showSelectedMovie(movie)} />
        <div className="info">
          <h1 className="card-title">{movie.title}</h1>
          <h2 className="card-date">{movie.release_date}</h2>
          <h2 className="card-rating">🌶 {movie.average_rating}</h2>
        </div>
      </div>
    </Link>
  )
}

export default Card;