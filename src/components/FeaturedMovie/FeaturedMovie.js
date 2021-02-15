import React from 'react';
import './FeaturedMovie.css'
import ToolTip from '@material-ui/core/Tooltip';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import {Link} from 'react-router-dom'

const FeaturedMovie = ({movie}) => {
  return (
    <div className="featured-movie" >

      <div className="featured-backdrop" style={{backgroundImage: `url(${movie.backdrop_path})`}}>
      </div> 
      <div className="featured-info" >
        <h1 className="featured-title">
          {movie.title}
        </h1>
        {movie.tagline &&
          <p className="featured-tagline">
            {movie.tagline}
          </p>
        } 
        <Link to={`/movies/{movie.id}`} className="more">
          <ToolTip 
            title="See Movie Details"   aria-label="More"
          >
            <AddCircleOutlineOutlinedIcon />
          </ToolTip>
        </Link>
        </div>
        <div className="feature-banner-info-rating">
          <h2 className="rating">
            🌶 Spicyness: {movie.average_rating}%
          </h2>
        </div>
      
      {movie.genres && movie.genres.length &&
        <Breadcrumbs 
          className="genresList"
          aria-label="breadcrumb"
          separator={<FiberManualRecordIcon fontSize="small" />}
        >
          {movie.genres.map(genre => (
            <p>{genre}</p>
          ))}
        </Breadcrumbs>
      }
    </div>  
    
  )
}

export default FeaturedMovie;