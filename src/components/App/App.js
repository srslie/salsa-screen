import React, { Component } from 'react';
import './App.css';
import movieData from '../../data/movieData';
import Movies from '../Movies/Movies'
import SearchBar from '../SearchBar/SearchBar'


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    }
  }

  showSearchResults = results => {
    this.setState({movies: results})
  }

  render = () => {
    return (
      <main>
        <header>
          <button>Back</button>
          <h1>Salsa Screen</h1>
          <button>Forward</button>
        </header>
        <SearchBar className="searchbar" movies={this.state.movies} showSearchResults={this.showSearchResults}/>
        <Movies className="movies" movies={this.state.movies} />
        <footer>
          <p className="copyright">© srslie - 2021</p>
        </footer>
      </main>
    )
  }
}

export default App;
