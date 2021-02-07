import React, { Component } from 'react'
import './App.css'
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
      movieIsSelected: false, 
      selectedMovie: null
    }
  }

  compileMovieData = (movies) => {
    const compiledMovies = movies.map(movie => {
      return Promise.all([apis.getSingleMovie(movie.id), apis.getTrailers(movie.id)])
      .then(data => {
        movie = data[0].movie
        movie['videos'] = data[1].videos
        movie.release_date = this.convertDate(movie.release_date)
        movie.average_rating = movie.average_rating.toFixed(2)
        movie.budget = this.formatCurrency(movie.budget)
        movie.revenue = this.formatCurrency(movie.revenue)
        movie.tagline = this.checkTextExistence(movie.tagline)
        movie.overview = this.checkTextExistence(movie.overview)
        return movie
      })
    })
    return Promise.all(compiledMovies)
  }

  componentDidMount = () => {
    apis.getMovies()
      .then(data => {
        this.setState({
          movies: data.movies, 
          loading: false
        })
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
          error: 'Sorry we\'re having trouble loading the movies, have some chips and try reloading!', 
        })
      })
  }   

  showSearchResults = results => {
    this.setState({searchResults: results})
  }

  showSelectedMovie = movie => {
    this.setState({
      movieIsSelected: true, 
      selectedMovie: movie
    })
  }

  displayAllMovies = () => {
    this.setState({
      movieIsSelected: false, 
      selectedMovie: null
    })
  }

  convertDate = date => {
    const dateSplit = date.split('-')
    const dateJoined =  dateSplit.join(',')
    const dateObject = new Date(dateJoined)
    const dateArray = dateObject.toDateString().split(' ')
    const monthYear = [dateArray[1], dateArray[3]]
    return monthYear.join(' ')
  }

  formatCurrency = number => {
    return number 
    ? number.toLocaleString('EN-US', {style: 'currency', currency: 'USD'}) 
    : 'Data Not Available'
  }

  checkTextExistence = text => {
    return text ? text : 'Data Not Available'
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
        {!this.state.movies.length && 
          <div className="error">
            <p>{this.state.error}</p>
          </div> 
        } 
        {this.state.movieIsSelected &&
          <SelectedMovie className="selectedMovie" movie={this.state.selectedMovie} displayAllMovies={this.displayAllMovies} />
        }
        {!this.state.movieIsSelected &&
          <Movies className="movies" movies={this.state.movies} searchResults={this.state.searchResults} showSelectedMovie={this.showSelectedMovie} />
        }
        <footer>
          <p className="copyright">© srslie - 2021</p>
        </footer>
      </main>
    )
  }
}

export default App;
