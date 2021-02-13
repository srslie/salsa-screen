import React from 'react';
import './selectedMovie.css';
import Trailer from '../Trailer/Trailer';
import {Link} from 'react-router-dom';
import ToolTip from '@material-ui/core/Tooltip';
import CancelIcon from '@material-ui/icons/Cancel';

const SelectedMovie = ({movie}) => {
  // console.log('INSELECTED', movie)
    return (
      <div className="selectedMovie" key={movie.id}>
        <div className="banner" style={{ 
        backgroundImage: `url(${movie.backdrop_path})`
        }}>
          <div className="banner-info">
            <div className="banner-info-title">
            <Link to={`/`} className="exit" >
              <ToolTip title="Exit Movie Details">
                  <exit aria-label="delete">
                    <CancelIcon />
                  </exit>
                </ToolTip>
              </Link>
              <h1 className="title">{movie.title}</h1>
              {movie.tagline &&
                <p className="tagline">{movie.tagline}</p>
              } 
            </div>
            <div className="banner-info-rating">
              <h2 className="rating">🌶 Spicyness: {movie.average_rating}%</h2>
            </div>
          </div>
        </div>

        <div className="info">
          {movie.overview &&
            <h3 className="overview">Overview: {movie.overview}</h3>
          }
          {movie.genres && movie.genres.length &&
            <div className="genres">
              <h3>Genres:</h3>
              <ul className="genresList">
                {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
              </ul>  
            </div>
          }
          {movie.runtime &&
            <h3 className="runtime">Runtime: {movie.runtime} mins</h3>
          }
          {movie.release_date &&
              <h2 className="date">Released: {movie.release_date}</h2>
          }
        </div>
        {movie.budget && movie.revenue &&
          <div className="money">
            {movie.budget &&
              <h3 className="budget">Budget: {movie.budget}</h3>
            }
            {movie.revenue &&
              <h3 className="revenue">Revenue: {movie.revenue}</h3>
            }
          </div>
        }

        {movie.videos && movie.videos.length &&
          <div className="trailers">
            <h3>Trailers & More:</h3>
              <div className="videosList">
                {movie.videos.map(video => Trailer(video.key))
              }
              </div>  
          </div>
        }
      </div>  
    )
}

export default SelectedMovie;

