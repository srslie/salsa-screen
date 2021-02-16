import React from 'react';
import './SimpleMovies.css'
import Card from '../Card/Card'

const SimpleMovies = ({movies}) => {
  return (
      <div className="movies">
        {movies.map(movie => <Card movie={movie} key={`${movie.id}-card`} />)}
      </div>
      )
}

export default SimpleMovies;