import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ''
    }
    
  }

  handleChange = event => {
    event.preventDefault()
    this.setState({searchInput: event.target.value.toLowerCase()})

    const titleMatch = this.props.movies.filter(movie => {
      const movieTitle = movie.title.toLowerCase()
      return movieTitle.includes(event.target.value.toLowerCase())
    })
    // const descriptionMatch = this.movieList.filter(movie => movie.description.includes(this.searchInput))
    // const searchResults = [...titleMatch, ...descriptionMatch]
    // const results = titleMatch.length ? titleMatch : '<p>Sorry, no results matched your search.<p>'
    this.props.showSearchResults(titleMatch)
  }

  render() {
    return (
      <form className="searchBar">
        <input className="search" value={this.state.searchInput} placeholder="🔍 Type to search..."  onChange={event => this.handleChange(event)} />
      </form>
    )
  }
}

export default SearchBar;