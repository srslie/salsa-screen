import React, { Component } from 'react'
import './App.css'
import movieData from '../../data/movieData'
import Movies from '../Movies/Movies'
import SearchBar from '../SearchBar/SearchBar'
import apis from './apis'


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: '',
      loading: false
    }
  }

  componentDidMount() {
    apis.getMovies()
      .then(data => {
        this.setState({
          movies: data.movies, 
          loading: true})
      })
      .catch(error => {
        this.setState({
          error: 'Sorry we\'re having trouble loading themovies, have some chips!', 
        })
      })
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
        {this.state.loading &&
          <div className="loading">
            <p>Loading...</p>
          </div> 
        }
        { !this.state.movies.length && 
            <div className="errorLoading">
              <p>{this.state.error}</p>
            </div> 
        } 
        <Movies className="movies" movies={this.state.movies} />
        <footer>
          <p className="copyright">© srslie - 2021</p>
        </footer>
      </main>
    )
  }
}

export default App;
