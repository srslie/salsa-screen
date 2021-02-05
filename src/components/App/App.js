import React, { Component } from 'react'
import './App.css'
import movieData from '../../data/movieData'
import Movies from '../Movies/Movies'
import SearchBar from '../SearchBar/SearchBar'
import apis from '../../apis'
import SelectedMovie from '../SelectedMovie/SelectedMovie'


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchResults: [],
      error: '',
      loading: true,
      selectedMovie: false
    }
  }

  compileMovieData = (movies) => {
    const compiledMovies = movies.map(movie => {
      return Promise.all([apis.getSingleMovie(movie.id), apis.getTrailers(movie.id)])
      .then(data => {
        movie = data[0].movie
        movie['videos'] = data[1].videos
        return movie
      })
    })
    return Promise.all(compiledMovies)
  }

  componentDidMount() {
    apis.getMovies()
      .then(data => {
        return this.compileMovieData(data.movies)
      })
      .then(compiledMovies => {
        this.setState({
          movies: compiledMovies, 
          loading: false
        })
      })
      .catch(() => {
        this.setState({
          error: 'Sorry we\'re having trouble loading the movies, have some chips!', 
        })
      })
  }   

  showSearchResults = results => {
    this.setState({searchResults: results})
  }

  showSelectedMovie = () => {
    this.setState({selectedMovie: true})
  }

  displayAllMovies = () => {
    this.setState({selectedMovie: false})
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
        { this.selectedMovie
          ? <SelectedMovie className="selectedMovie" displayAllMovies={this.displayAllMovies} />
          : <Movies className="movies" movies={this.state.movies} searchResults={this.state.searchResults} showSelectedMovie={this.showSelectedMovie}/>
        }
        <footer>
          <p className="copyright">© srslie - 2021</p>
        </footer>
      </main>
    )
  }
}

export default App;
