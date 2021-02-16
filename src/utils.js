import apis from './apis'

const utils = {
  convertDate(date) {
    const dateSplit = date.split('-')
    const dateJoined =  dateSplit.join(',')
    const dateObject = new Date(dateJoined)
    const dateArray = dateObject.toDateString().split(' ')
    const monthYear = [dateArray[1], dateArray[3]]
    return monthYear.join(' ')
  },

  formatCurrency(number) {
    return number 
    ? number.toLocaleString('EN-US', {style: 'currency', currency: 'USD'}) 
    : false
  },

  checkTextExistence(text) {
    return text && typeof text === 'string' ? text : false
  },

  compileMovieData(movies, setState) {
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
        setState({
          loading: true,
          error: 'Sorry we\'re having trouble loading the movies, have some chips and try reloading!', 
        })
        throw new Error('Oops')
      })
    })
    return Promise.all(compiledMovies)
      .catch(() => {
      setState({
        loading: true,
        error: 'Sorry we\'re having trouble loading the movies, have some chips and try reloading!', 
      })
      throw new Error('Oops')
    })
  },

  getAllGenres(movies) {
    let allGenres = []
    movies.forEach(movie => {
      movie.genres.forEach(genre => {
        if (!allGenres.includes(genre)) {
          allGenres.push(genre)
        }
      })
    })
    return allGenres
  },

  addSpiceRating(rating) {
    const percentSpice =  `: 🌶 ${rating}%`
    if (rating <=40) {
      return `Mild${percentSpice}`
    } else if (rating <= 70) {
      return `Medium-Hot${percentSpice}`
    } else {
      return `Hot${percentSpice}`
    }
  }
    
}

export default utils;