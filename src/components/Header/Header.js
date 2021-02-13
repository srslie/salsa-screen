import React from 'react';
import './header.css';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/Button';
import anchorEl from '@material-ui/core/Button';
import open from '@material-ui/core/Button';
import Fade from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

const Header = () => {
  const handleClick = () => {

  }

  const handleClose = () => {

  }

  return (
    <>
    <header>
      {/*font image from: https://fontmeme.com/netflix-font/ */}
      <Link to='/'> <img className="siteName" src="https://fontmeme.com/permalink/210212/496fe59db9e604cf780fe829057c5f87.png" alt="netflix-font" border="0" /></Link>
      <Button className="genreButton" aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
      Genres
      </Button>
      <Menu className="genreMenu"
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Action</MenuItem>
        <MenuItem onClick={handleClose}>Adventure</MenuItem>
        <MenuItem onClick={handleClose}>Comedy</MenuItem>
        <MenuItem onClick={handleClose}>Comedy</MenuItem>
      </Menu>
    </header>
    </>
  )

}

export default Header;