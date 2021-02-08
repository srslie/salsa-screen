import React from 'react';
import './trailer.css'
import ReactPlayer from 'react-player/youtube'

const Trailer = (key) => {
    return (
      <ReactPlayer
        className='trailer'
        url={`https://www.youtube.com/embed/${key}`}
        width='100%'
        height='100%'
      />
    )
}

export default Trailer