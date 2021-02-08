import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom';
import './App.css'
import Header from '../Header/Header'
import Loading from '../Loading/Loading'
import Error from '../Error/Error'
import Movies from '../Movies/Movies'
import SearchBar from '../SearchBar/SearchBar'
import SelectedMovie from '../SelectedMovie/SelectedMovie'
import Footer from '../Footer/Footer'
import apis from '../../apis'
import utils from '../../utils'

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
        movie.average_rating = movie.average_rating.toFixed(1)
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
        return utils.compileMovieData(data.movies)
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
    : false
  }

  checkTextExistence = text => {
    return text ? text : false
  }

  render = () => {
    return (
    <main> 
      <Header />
      {/* <SearchBar className="searchbar" movies={this.state.movies}showSearchResults={this.showSearchResults}/> */}
  
      <Switch>
        <Route path="/loading" component={Loading} />

        <Route path="/error" component={Error} />

        <Route path="/movie/::id" component={SelectedMovie}className="SelectedMovie" movie={this.state.selectedMovie}displayAllMovies={this.displayAllMovies} />

        <Route path="/" exact component={Movies} 
          render={() => {
          <Movies className="movies" movies={this.state.movies} searchResults={this.state.searchResults}showSelectedMovie={this.showSelectedMovie} />} }/>
      </Switch>
      <Footer />
    </main>
    )
  }
}

export default App;
