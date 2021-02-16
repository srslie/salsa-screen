import React from 'react';
import './DropDown.css';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Button from '@material-ui/core/Button';
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

const DropDown = ({movies, showSearchResults, allGenres}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = event => {
    let classNames = event.currentTarget.className.split(' ')
    let genre = classNames[classNames.length-1]
    setAnchorEl(null);
    const filteredMovies = movies.filter(movie => movie.genres.includes(genre))
    showSearchResults(filteredMovies)
  };

  return (
     <div className="menu-wrapper">
      <Button 
        className="genre-button" 
        aria-controls="fade-menu" 
        aria-haspopup="true" 
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
            className={genre}
            onClick={handleClose}
            key={`menuItem-${genre}`}
          >
            {genre}
          </StyledMenuItem>
          )}
        )}

        </StyledMenu>
      </div>
  )
}

export default DropDown;