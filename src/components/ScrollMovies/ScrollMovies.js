import React from 'react';
import './ScrollMovies.css';
import FeaturedMovie from '../FeaturedMovie/FeaturedMovie'
import ScrollSection from '../ScrollSection/ScrollSection';


const ScrollMovies = ({movies, allGenres}) => {
  const randomMovie = () => {
    const randomIndex = Math.floor(Math.random() * Math.floor(movies.length))
    return movies[randomIndex]
  }

  return (
    <div className="scroll-movies">
    <FeaturedMovie movie={randomMovie()} />
    <div className="movies-genres">
      {allGenres.map(genre => {
      return (
        <ScrollSection 
          movies={movies}
          allGenres={allGenres}
          genre={genre}
          key={`scroll-section-${genre}`}
        />
      )
    })}
    </div>
    </div>
  )
} 

export default ScrollMovies;