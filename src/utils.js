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
    return text ? text : false
  },

  compileMovieData(movies) {
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

}

export default utils;