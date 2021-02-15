import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css'
import Header from '../Header/Header'
import Movies from '../Movies/Movies'
import Loading from '../Loading/Loading'
import Error from '../Error/Error'
import SelectedMovie from '../SelectedMovie/SelectedMovie'
import SimpleMovies from '../SimpleMovies/SimpleMovies'
import NotFound from '../NotFound/NotFound'
import Footer from '../Footer/Footer'
import apis from '../../apis'
import utils from '../../utils'


class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      allGenres: [],
      searchResults: [],
      error: '',
      loading: true  
    }
  }

  componentDidMount = () => {
    apis.getMovies()
      .then(data => {
        this.setState({
          movies: data.movies, 
          loading: false
        })
        return utils.compileMovieData(data.movies, this.setState)
      })

      .then(compiledMovies => {
        this.setState({
          movies: compiledMovies, 
          loading: false,
          allGenres: utils.getAllGenres(compiledMovies)
        })
      })

      .catch(() => {
        this.setState({
          error: 'Sorry we\'re having trouble loading the movies, have some chips and try reloading!', 
        })
      })
  }   

  showSearchResults = results => {
    if (!results) {
      this.setState({
        error: '',
        searchResults: null
      })
    } else if (typeof results === 'string') {
      this.setState({error: results}) 
    } else {
      const uniqueResults = Array.from(new Set(results))
      this.setState({
        error: '',
        searchResults: uniqueResults
      })
    }
  }

  showHome = () => {
    this.setState({
      searchResults: []
    })
    console.log('INSHOWHOME', this.state)
  }
 
  render = () => {
    return (
    <main> 
      <Header 
        movies={this.state.movies}    
        showSearchResults={this.showSearchResults} 
        allGenres={this.state.allGenres}
        showHome={this.showHome} 
      />

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

              {this.state.searchResults.length &&  
              <Redirect to="/searchResults/" />}

              {!this.state.loading && !this.state.error && 
                  <Movies 
                    className="movies" 
                    movies={this.state.movies} 
                    searchResults={this.state.searchResults} 
                    showSelectedMovie={this.showSelectedMovie} 
                    showSearchResults={this.showSearchResults} 
                    key={Date.now()}
                    allGenres={this.state.allGenres}
                  />
              }
            </>
          )}
        />

        {this.state.movies && !this.searchResults &&
          <Route path="/movie/:id" 
            render={({match}) => {
                return ( 
                  <SelectedMovie 
                    className="SelectedMovie" 
                    match={match} 
                    movies={this.state.movies}
                    key={Date.now()} 
                  />
                )
              }
            }
          />
        }

      {this.state.movies && this.state.searchResults.length &&
          <Route path="/searchResults"
            render={() => { 
              return (<SimpleMovies movies={this.state.searchResults} />)
            } 
        } />
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
