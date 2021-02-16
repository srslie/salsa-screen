import React from 'react';
import './FeaturedMovie.css'
import ToolTip from '@material-ui/core/Tooltip';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import {Link} from 'react-router-dom';
import InfoIcon from '@material-ui/icons/Info';

const FeaturedMovie = ({movie}) => {
  return (
    <div className="featured-movie" >

      <div className="featured-backdrop" style={{backgroundImage: `url(${movie.backdrop_path})`}}>
      </div> 
      <div className="featured-info" >
        <div></div>
        <div className="featured-info-wrap">
        <h1 className="featured-title">
          {movie.title}
        </h1>
        {movie.tagline &&
          <p className="featured-tagline">
            {movie.tagline}
          </p>
        } 
          <h2 className="featured-rating">
            Spicyness:  🌶 {movie.average_rating}%
          </h2>  
      
      {movie.genres && movie.genres.length &&
        <Breadcrumbs 
          className="featured-genres-list"
          aria-label="breadcrumb"
          separator={<FiberManualRecordIcon fontSize="small" color="white" />}
        >
          {movie.genres.map(genre => (
            <p className="featured-genre">{genre}</p>
          ))}
        </Breadcrumbs>
      }
      <Link to={`/movie/${movie.id}`} className="more" >
          <ToolTip 
            title="See Movie Details" aria-label="More"
          >
            <>
             <InfoIcon className='icon' color="white" />
             <p className="more-text">More Info</p>
            </>
          </ToolTip>
      </Link>
      </div>
      </div>
      <div className="fill">
        <p>;)</p>
      </div>
    </div>  

    
  )
}

export default FeaturedMovie;