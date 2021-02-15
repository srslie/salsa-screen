import React from 'react';
import SimpleMovies from '../SimpleMovies/SimpleMovies';
import ScrollMovies from '../ScrollMovies/ScrollMovies';

const Movies = ({movies, searchResults, allGenres}) => {
   if (movies[0].genres) {
    return (
      <ScrollMovies movies={movies} allGenres={allGenres} />
    )
  } else {
    return (
      <SimpleMovies movies={movies} />
    )
  }
}

export default Movies;