const apis = {
  getData(path) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2${path}`)
      .then(response => response.json())
      .catch(error => console.log('API ERROR', error))
  },

  getMovies() {
    return this.getData('/movies')
  },

  getSingleMovie(id) {
    return this.getData(`/movies/${id}`)
  },

  getTrailers(id) {
    return  this.getData(`/movies/${id}/videos`)
  },

  //returns A user’s ratings for all movies: {"ratings": [{id: 1, user_id: 1, movie_id: 1, rating: 6, created_at: "someDate", updated_at: "someDate"},...]}
  getUserRatings = userId => {
    this.getData(`/users/:${userId}/ratings`)
  },

  //returns 204 status code (NO CONTENT in response body)
  deleteUserRating = (userId, ratingId) => {
    const settings = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    return fetch(`/users/:${userId}/ratings/:${ratingId}`, settings)
      .then(response => response.json())
      .catch(error => console.log('API ERROR', error))
  },

  //returns The rating that was successfully created: {rating: {user_id: 2, movie_id: 19, rating: 5}}
  postUserRating = (userId, movieId, ratingOnetoTen) => {
    const settings =  {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        movie_id: movieId, 
        rating: ratingOnetoTen
      })
    }

    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/:${userId}/ratings`, settings)
      .then(response => response.json())
  },

  //returns A user’s login session information: {user: {id: 1, name: "Alan", email: "alan@turing.io"}}
  login = (email, password) => {
    const settings =  {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email, 
        password: password
      })
    }

    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/login', settings)
      .then(response => response.json())
  }

}

export default apis