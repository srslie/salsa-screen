import React from 'react';
import './error.css';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const Error = ({error}) => {
  return (
    <div className="error">
      <ErrorOutlineIcon className='error-icon' />
      <div>
      <p>{error}</p>
      </div>
    </div> 
  )
}

export default Error;