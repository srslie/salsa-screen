import React from 'react';
import './notFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  console.log('PAGE NOT FOUND')
  return (
    <div className="notFound">
      <p>Sorry, page not found.</p>
      <Link to={`/`} className="redirect-home">Home</Link>
    </div> 
  )
}

export default NotFound;