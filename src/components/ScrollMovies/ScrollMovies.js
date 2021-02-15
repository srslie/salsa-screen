import React from 'react';
import './ScrollMovies.css';
import Card from '../Card/Card';
import FeaturedMovie from '../FeaturedMovie/FeaturedMovie'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



const ScrollMovies = ({movies, allGenres}) => {
  console.log('INSCROLLMOVIES', allGenres)
  const scroller = React.useRef()

  const scrollRight = () => {
    scroller.current.scrollLeft += 200
  }

  const scrollLeft = () => {
    scroller.current.scrollLeft -= 200
  }

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
        <div className="genre-row">
          <div className= "genre">
            <h2 className="genre-name">{`${genre}`}</h2>
            <div className="slider">
              <span 
                className="leftScroll"  
                tabIndex="0" 
                role="button"   
                aria-label="See previous titles"
                onClick={scrollLeft}
              >
                <ArrowBackIosIcon />
              </span>
                <div className="slider-cards" ref={scroller}>
                  {movies
                    .filter(movie => movie.genres.includes(genre))
                    .map(movie => <Card movie={movie} />)
                  }
                </div>
              <span 
                className="rightScroll"  
                tabIndex="0" role="button"   
                aria-label="See previous titles" 
                onClick={scrollRight}
              >
                <ArrowForwardIosIcon />
              </span>
            </div>
          </div>
        </div>
      )
    })}
    </div>
    </div>
  )
} 

export default ScrollMovies;