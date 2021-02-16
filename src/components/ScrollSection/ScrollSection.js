import React from 'react';
import './ScrollSection.css'
import Card from '../Card/Card'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ToolTip from '@material-ui/core/Tooltip';


 const ScrollSection = ({movies, allGenres, genre}) => {
  const scroller = React.useRef()

  const scrollRight = () => {
    scroller.current.scrollLeft += 1000
  }

  const scrollLeft = () => {
    scroller.current.scrollLeft -= 1000
  }
  
  return (
    <div className="genre-row" key={genre + ' section'}>
      <div className= "genre">
        <h2 className="genre-name">{`${genre}`}</h2>
        <div className="slider">
          <ToolTip title={`See more titles`} arrow >
          <span
            className="leftScroll"  
            tabIndex="0" 
            role="button"   
            aria-label="See previous titles"
            onClick={scrollLeft}
          >
            <ArrowBackIosIcon />
          </span>
          </ToolTip>
            <div className="slider-cards" ref={scroller}>
              {movies
                .filter(movie => movie.genres.includes(genre))
                .map(movie => <Card movie={movie} key={movie.id + ' card'}/>)
              }
            </div>
          <ToolTip title={`See more titles`} arrow >
          <span 
            className="rightScroll"  
            tabIndex="0" role="button"   
            aria-label="See previous titles" 
            onClick={scrollRight}
          >
            <ArrowForwardIosIcon />
          </span>
          </ToolTip>
        </div>
      </div>
    </div>
  )
  }

  export default ScrollSection;