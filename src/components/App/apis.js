const apis = {
  getData = path => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2${path}`)
      .then(response => response.json())
      .catch(error => console.log('API ERROR', error))
  },

  //returns All movies in database with average rating:{"movies": [{id: 1, title: "Movie Title", poster_path: "someURL", backdrop_path: "someURL", release_date: "2019-12-04", overview: "Some overview", average_rating: 6 }, ...]}
  getMovies = () => {
    this.getData('/movies')
  },

  //returns The movie corresponding to the id sent in the URL: {"movie": {id: 1, title: "Movie Title", poster_path: "someURL", backdrop_path: "someURL", release_date: "2019-12-04", overview: "Some overview", average_rating: 6, genres: [{id: 18, name:"Drama"}], budget:63000000, revenue:100853753, runtime:139, tagline: "Movie Tagline" }}
  getSingleMovie = id => {
    this.getData(`/movies/:${id}`)
  },

  //An array of available videos corresponding to the movie whose id is in the URL; this may be an empty array: [] or [id: 1, movie_id: 1, key:"SUXWAEX2jlg", site: "YouTube", type:"Trailer"]
  getTrailers = id => {
    this.getData(`/movies/:${id}/videos`)
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
      },
      body: JSON.stringify(bodyPost)
    }
    return fetch(`/users/:${userId}/ratings/:${ratingId}`, settings)
    .catch(error => console.log('API ERROR', error)
  },

  //returns The rating that was successfully created: {rating: {user_id: 2, movie_id: 19, rating: 5}}
  postUserRating = (userId, movieId, ratingOnetoTen) {
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