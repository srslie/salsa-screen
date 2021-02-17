import React from 'react';
import './selectedMovie.css';
import Trailer from '../Trailer/Trailer';
import {Link} from 'react-router-dom';
import ToolTip from '@material-ui/core/Tooltip';
import CancelIcon from '@material-ui/icons/Cancel';
import Error from '../Error/Error';
import utils from '../../utils'


const SelectedMovie = ({match, movies}) => {
  const movieId = match.url.split('/')[2]
  const movie = movies.find(movie => movie.id ===   parseInt(movieId))

  if (movie) {
    return (
      <div className="selected-movie" key={movie.id}>
        <div className="banner" style={{ 
        backgroundImage: `url(${movie.backdrop_path})`
        }}>
          <div className="banner-info">
            <div className="banner-info-title">
            <Link to={`/`} className="exit" >
              <ToolTip title="Exit Movie Details" aria-label="exit">
                    <CancelIcon />
                </ToolTip>
              </Link>
              <h1 className="title">{movie.title}</h1>
              {movie.tagline &&
                <p className="tagline">{movie.tagline}</p>
              } 
            </div>
            <div className="banner-info-rating">
              <h2 className="rating">
                {utils.addSpiceRating(movie.average_rating)}
              </h2>
            </div>
          </div>
        </div>

        <div className="selected-info">
          {movie.overview &&
            <div className="overview-wrapper">
              <h3 className="overview">Overview:</h3> 
              <p>{movie.overview}</p>
            </div>
          }
          <div className="info-wrapper">
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
        </div>
        {movie.videos && movie.videos.length &&
          <div className="trailers">
            <h3>Trailers & More:</h3>
              <div className="videos-list">
                {movie.videos.map(video => Trailer(video.key))
              }
              </div>  
          </div>
        }
      </div>  
    )
  } else {
    return (
      <Error 
        error={'Sorry, having trouble loading this movipl try navigating home and retrying'} 
      />
    )
  }
}

export default SelectedMovie;

