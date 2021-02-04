import React from 'react';
import './movies.css'
import Card from '../Card/Card'

const Movies = ({movies}) => {
  return (
    <div className="movies">
      {movies.map(movie => {
        return Card(movie)
      })}
    </div>
  )
}

export default Movies;