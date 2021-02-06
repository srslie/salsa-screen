import React from 'react';
import './card.css'

const Card = (movie, showSelectedMovie, convertDate) => {

  const showMoreInfo = event => {
    event.preventDefault()
    showSelectedMovie(movie)
  }

  return (
    <div className="card" id={movie.id} key={movie.id}>
      <img src={movie.poster_path} alt="movie poster"/>
      <div className="info">
        <h1 className="title">{movie.title}</h1>
        <h2 className="date">{convertDate(movie.release_date)}</h2>
        <h2 className="rating">{movie.average_rating.toFixed(2)}</h2>
        <button onClick={showMoreInfo}>More Info</button>
      </div>
    </div>
  )
}

export default Card;