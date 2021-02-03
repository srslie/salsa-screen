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
        <header>
          <button>Back</button>
          <h1>Salsa Screen</h1>
          <button>Forward</button>
        </header>
        <form className="searchBar">
          <input className="search" placeholder="🔍 Search..." />
        </form>
        <Movies className="movies" movies={this.state.movies} />
        <footer>
          <p>© srslie - 2021</p>
        </footer>
      </div>
    )
  }
}

export default App;
