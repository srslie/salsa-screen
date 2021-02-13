import React from 'react';
import './ScrollMovies.css';
import Card from '../Card/Card';
import FeaturedMovie from '../FeaturedMovie/FeaturedMovie'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



const ScrollMovies = ({movies}) => {
  const scroller = React.useRef()

  const scrollRight = () => {
    scroller.current.scrollLeft += 200
  }

  const scrollLeft = () => {
    scroller.current.scrollLeft -= 200
  }

  let allGenres = []
  movies.forEach(movie => {
    movie.genres.forEach(genre => {
      if (!allGenres.includes(genre)) {
        allGenres.push(genre)
      }
    })
  })

  return (
    <div className="moviesGenres">
      <FeaturedMovie movie={movies[2]} />
    {allGenres.map(genre => {
      return (
        <wrapper className="genreRow">
          <div className= "genre">
            <h2 className="genreName">{`${genre}`}</h2>
            <wrapper className="slider">
              <span 
                class="leftScroll"  
                tabindex="0" 
                role="button"   
                aria-label="See previous titles"
                onClick={scrollLeft}
              >
                <ArrowBackIosIcon />
              </span>
                <wrapper className="sliderCards" ref={scroller}>
                  {movies
                    .filter(movie => movie.genres.includes(genre))
                    .map(movie => <Card movie={movie} />)
                  }
                </wrapper>
              <span 
                class="rightScroll"  
                tabindex="0" role="button"   
                aria-label="See previous titles" 
                onClick={scrollRight}
              >
                <ArrowForwardIosIcon />
              </span>
            </wrapper>
          </div>
        </wrapper>
      )
    })}
    </div>
  )
} 

export default ScrollMovies;