import React from 'react';
import './movies.css'
import Card from '../Card/Card'

const Movies = ({movies, searchResults, showSelectedMovie, convertDate}) => {
  const moviesToDisplay = searchResults.length ? searchResults : movies
  return (
    <div className="movies">
      {moviesToDisplay.map(movie => {
        return Card(movie, showSelectedMovie, convertDate)
      })}
    </div>
  )
}

export default Movies;