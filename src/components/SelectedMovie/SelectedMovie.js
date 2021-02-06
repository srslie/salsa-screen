import React from 'react';
import './selectedMovie.css'

const SelectedMovie = ({movie, displayAllMovies, convertDate}) => {
    return (
      <div className="selectedMovie" style={{ 
        backgroundImage: `url(${movie.backdrop_path})` 
      }}>
        <button className="exit" onClick={displayAllMovies}>X</button>
        <img src={movie.poster_path} alt="movie poster"/>
        <div className="info">
          <h1 className="title">{movie.title}</h1>
          <h2 className="rating">Rating: {movie.average_rating.toFixed(2)}</h2>
          <h2 className="date">Released: {convertDate(movie.release_date)}</h2>
          <h3 className="tagline">{movie.tagline}</h3>
          <h3 className="overview">Overview: {movie.overview}</h3>
          <div className="genres">
            <h3>Genres:</h3>
            <ul className="genresList">
              {movie.genres.map(genre => <li>genre</li>)}
            </ul>  
          </div>
          <h3 className="budget">{movie.budget}</h3>
          <h3 className="revenue">{movie.revenue}</h3>
          <h3 className="runtime">{movie.runtime}</h3>
          <div className="videos">
            <h3>Genres:</h3>
            <ul className="videosList">
              {movie.videos.map(video => {
                  return <p>video</p>
                })
              }
            </ul>  
          </div>
        </div>
      </div>  
    )
}

export default SelectedMovie;