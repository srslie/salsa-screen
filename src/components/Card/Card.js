import React from 'react';
import './card.css'
import SelectedMovie from '../SelectedMovie/SelectedMovie'

const Card = movie => {

  const convertDate = date => {
    const dateSplit = date.split('-')
    const dateJoined =  dateSplit.join(',')
    const dateObject = new Date(dateJoined)
    const dateArray = dateObject.toDateString().split(' ')
    const monthYear = [dateArray[1], dateArray[3]]
    return monthYear.join(' ')
  }

  const showMoreInfo = event => {
    event.preventDefault()
    return (
      <SelectedMovie movie={movie}/>
    )
  }

  return (
    <div className="card" id={movie.id} key={movie.id}>
      <img src={movie.poster_path} alt="movie poster"/>
      <div className="info">
        <h1 className="title">{movie.title}</h1>
        <h2 className="date">{convertDate(movie.release_date)}</h2>
        <h2 className="rating">{movie.average_rating.toFixed(2)}</h2>
        <button onClick={showMoreInfo}>More Info</button>
      </div>
    </div>
  )
}

export default Card;