import React from 'react';
import Card from '../Card/Card'

const Movies = ({movies}) => {
  return movies.map(movie => {
      return Card(movie)
    }
  )
}

export default Movies;