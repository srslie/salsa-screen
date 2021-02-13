import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css'
import Header from '../Header/Header'
import Movies from '../Movies/Movies'
import Loading from '../Loading/Loading'
import Error from '../Error/Error'
import SearchBar from '../SearchBar/SearchBar'
import SelectedMovie from '../SelectedMovie/SelectedMovie'
import NotFound from '../NotFound/NotFound'
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
      loading: true
    }
  }

  compileMovieData = (movies) => {
    const compiledMovies = movies.map(movie => {
      return Promise.all([apis.getSingleMovie(movie.id), apis.getTrailers(movie.id)])
      .then(data => {
        movie = data[0].movie
        movie['videos'] = data[1].videos
        movie.release_date = this.convertDate(movie.release_date)
        movie.average_rating = movie.average_rating.toFixed(1) * 10
        movie.budget = this.formatCurrency(movie.budget)
        movie.revenue = this.formatCurrency(movie.revenue)
        movie.tagline = this.checkTextExistence(movie.tagline)
        movie.overview = this.checkTextExistence(movie.overview)
        return movie
      })

      .catch(() => {
        this.setState({
          loading: true,
          error: 'Sorry we\'re having trouble loading the movies, have some chips and try reloading!', 
        })
        throw new Error('Oops')
      })
    })
    return Promise.all(compiledMovies)

    .catch(() => {
      this.setState({
        loading: true,
        error: 'Sorry we\'re having trouble loading the movies, have some chips and try reloading!', 
      })
      throw new Error('Oops')
    })
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
    return text && typeof text === 'string' ? text : false
  }

  check

  render = () => {
    return (
    <main> 
      <Header />
      <Switch>
        <Route exact path="/" 
          render={() => (
            <>
              {this.state.loading && !this.state.error &&
                <Loading />
              }

              {this.state.error && 
                <Error error={this.state.error} />
              } 

              {!this.state.loading &&
                <>
                  <SearchBar 
                    className="searchbar" 
                    movies={this.state.movies} 
                    showSearchResult={this.showSearchResults} 
                  />
                  <Movies 
                    className="movies" 
                    movies={this.state.movies} 
                    searchResults={this.state.searchResults} 
                    showSelectedMovie={this.showSelectedMovie} 
                    showSearchResults={this.showSearchResults} 
                    key={Date.now()}
                  />
                </>
              }
            </>
          )}
        />

        {this.state.movies &&
          <Route path="/movie/:id" 
            render={({match}) => {
              const movieId = match.url.split('/')[2]
              const movieMatch = this.state.movies.find(movie => movie.id ===   parseInt(movieId))
              if (movieMatch) {
                return ( 
                  <SelectedMovie 
                    className="SelectedMovie" 
                    movie={movieMatch} 
                    displayAllMovies={this.displayAllMovies} 
                    key={Date.now()} 
                  />
                )
              } else {
                return (
                  <Error 
                    error={'Sorry, having trouble loading this movie, please try navigating home and retrying'} 
                  />
                )
              }
            }} 
          />
        }

        <Route path="/404" render={() => <NotFound />} />

        <Redirect to="/404" />

      </Switch>
      <Footer />
    </main>
    )
  }
}

export default App;
