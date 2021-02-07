import React from 'react';
import './selectedMovie.css'

const SelectedMovie = ({movie, displayAllMovies}) => {
    return (
      <div className="selectedMovie" style={{ 
        backgroundImage: `url(${movie.backdrop_path})` 
      }} key={movie.id}>
        <button className="exit" onClick={displayAllMovies}>X</button>
        <img src={movie.poster_path} alt="movie poster"/>
        <div className="info">
          <h1 className="title">{movie.title}</h1>
          <h2 className="rating">Rating: {movie.average_rating}</h2>
          <h2 className="date">Released: {movie.release_date}</h2>
          <h3 className="tagline">{movie.tagline}</h3>
          <h3 className="overview">Overview: {movie.overview}</h3>
          <div className="genres">
            <h3>Genres:</h3>
            <ul className="genresList">
              {movie.genres.map(genre => <li>{genre}</li>)}
            </ul>  
          </div>
          <h3 className="budget">Budget: {movie.budget}</h3>
          <h3 className="revenue">Revenue: {movie.revenue}</h3>
          <h3 className="runtime">Runtime: {movie.runtime}</h3>
          <div className="videos">
            <h3>Videos:</h3>
            <ul className="videosList">
              {console.log(movie.videos)}
              {movie.videos.map(video => <p>{video.site} {video.type}</p>)}
            </ul>  
          </div>
        </div>
      </div>  
    )
}

export default SelectedMovie;

