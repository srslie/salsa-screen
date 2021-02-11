import React from 'react';
import './header.css';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/Button';
import anchorEl from '@material-ui/core/Button';
import open from '@material-ui/core/Button';
import Fade from '@material-ui/core/Button';

const Header = () => {
  const handleClick = () => {

  }

  const handleClose = () => {

  }

  return (
    <header>
      <h1>🌶 Salsa Screen 🎬</h1>
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
  )

}

export default Header;