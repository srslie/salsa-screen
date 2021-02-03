import React, { Component } from 'react';
import './App.css';
import movieData from '../../data/movieData';
import Movies from '../Movies/Movies'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <button>Back</button>
          <h1>Salsa Screen</h1>
          <button>Forward</button>
        </div>
        <div className="searchBar">
          <p>Will eventually be a searchBar here</p>
        </div>
        <Movies movies={this.state.movies} />
      </div>
    )
  }
}

export default App;
