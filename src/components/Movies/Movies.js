import React from 'react';
import './movies.css'
import Card from '../Card/Card'

const Movies = ({movies, searchResults}) => {
  const moviesToDisplay = searchResults.length ? searchResults : movies
  return (
      <div className="movies">
        {moviesToDisplay.map(movie => <Card movie={movie} />)}
      </div>
  )
}

export default Movies;