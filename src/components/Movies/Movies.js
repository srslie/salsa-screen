import React, {useState, useEffect} from 'react';
import './movies.css'
import Card from '../Card/Card'
import apis from '../../apis'

const Movies = () => {

  useEffect(() => {
    apis.getMovies()
  }, [])

  const [movies] = useEffect({})
  // const moviesToDisplay = searchResults.length ? searchResults : movies
  return (
    <div className="movies">
      {moviesToDisplay.map(movie => {
        return Card(movie, showSelectedMovie, convertDate)
      })}
    </div>
  )
}

export default Movies;