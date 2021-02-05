import React, { Component } from 'react';
import './selectedMovie.css'
import apis from '../../apis'

class SelectedMovie extends Component {
  constructor(props) {
    super();
    this.state = {
      input: ''
    }
  }

  componentDidMount() {
    
  }

  handleSubmit = event => {
    event.preventDefault()

    Promise.resolve(apis.postUserRating(1, this.props.movie.id, this.state.input))
      .then(() => {
        Promise.resolve(apis.getUserRatings())
      })
  }

  render() {
    return (
      <div className="selectedMovie">
        <button className="exit" onClick={}>X</button>
        <h3 className="overview">{this.props.overview}</h3>
        <form>
          <label htmlFor="rating">Rate Movie!</label>
          <input className="rating" type="number" value='userRating' placeholder='10' />
          <button className="rate" onClick={this.handleSubmit}></button>
        </form>
      </div>
    )
  }
}

export default SelectedMovie;