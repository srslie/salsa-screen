import React from 'react';
import './error.css';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';;

const Error = ({error}) => {
  return (
    <div className="error">
      <ErrorOutlineIcon className='icon' />
      <p>{error}</p>
    </div> 
  )
}

export default Error;