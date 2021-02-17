import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar'
import DropDown from '../DropDown/DropDown'

const Header = ({movies, showSearchResults, allGenres, showHome}) => {
  return (
    <>
    <header>
      <Link to="/" onClick={showHome}> <img className="site-name" src="https://fontmeme.com/permalink/210212/496fe59db9e604cf780fe829057c5f87.png" alt="netflix-font" border="0" /></Link>
      {/*font image from: https://fontmeme.com/netflix-font/ */}
  
      {movies &&
      <>
      <DropDown 
        className="drop-down"
        movies={movies}
        showSearchResults={showSearchResults}
        allGenres={allGenres}
      />
      <SearchBar 
        className="searchbar" 
        movies={movies} 
        showSearchResults={showSearchResults} 
      />  
      </>
      }
    </header>
    </>
  )

}

export default Header;