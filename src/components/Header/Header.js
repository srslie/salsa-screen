import React from 'react';
import './header.css';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { withStyles } from '@material-ui/core/styles';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const Header = ({movies, showSearchResults, allGenres}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl); 

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    showSearchResults()
  };

  return (
    <>
    <header>
      <Link to='/'> <img className="siteName" src="https://fontmeme.com/permalink/210212/496fe59db9e604cf780fe829057c5f87.png" alt="netflix-font" border="0" /></Link>
      {/*font image from: https://fontmeme.com/netflix-font/ */}
  
      <div className="menu-wrapper">
      <Button 
        className="genre-button" 
        aria-controls="fade-menu" 
        aria-haspopup="true" 
        color="white"
        onClick={handleClick}>
        Browse
        <ArrowDropDownIcon />
      </Button>

      <StyledMenu 
        className="genre-menu"
        id="genre-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
      
        {allGenres.map(genre => {
          return (
          <StyledMenuItem 
            onClick={handleClose}
          >
            {genre}
          </StyledMenuItem>
          )}
        )}

        </StyledMenu>
      </div>


      {movies &&
      <SearchBar 
        className="searchbar" 
        movies={movies} 
        showSearchResults={showSearchResults} 
      />
      }
    </header>
    </>
  )

}

export default Header;