import React from 'react';
import './movies.css'
import Card from '../Card/Card'
import apis from '../../apis'

const Movies = ({movies, searchResults, showSelectedMovie, convertDate}) => {

  console.log(movies)
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