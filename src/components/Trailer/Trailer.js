import React from 'react';
import './trailer.css'
import ReactPlayer from 'react-player/youtube'

const Trailer = (key) => {
    return (
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={`https://www.youtube.com/embed/${key}`}
          width='100%'
          height='100%'
        />
      </div>
    )
}

export default Trailer