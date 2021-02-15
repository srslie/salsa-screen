import React from 'react';
import './card.css';
import {Link} from 'react-router-dom';
import ToolTip from '@material-ui/core/Tooltip';

const Card = ({movie}) => {
  return (
    <ToolTip title={`Click for details about ${movie.title} 🎥 `}arrow>
    <Link to={`/movie/${movie.id}`}>
      <div className="card" 
        id={movie.id} 
        key={movie.id}
      >
        <img className="cardImg" 
          src={movie.poster_path} 
          alt={`${movie.title} movie poster from ${movie.release_date}`} 
        />
        <div className="cardInfo hidden">
          <span className="ratingOverlay">
            <h2 className="card-rating">🌶 {movie.average_rating}%</h2>
          </span>
        </div>
      </div>
    </Link>
    </ToolTip>
  )
}

export default Card;