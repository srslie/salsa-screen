import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super();
    this.state = {
      searchInput: '',
      movieList: props.movies,
      search: props.showSearchResults
    }
    
  }

  handleChange = event => {
    event.preventDefault()

    this.setState({searchInput: event.target.value.toLowerCase() })

    const titleMatch = this.state.movieList.filter(movie => {
      const movieTitle = movie.title.toLowerCase()
      return movieTitle.includes(this.state.searchInput)
    })
    // const descriptionMatch = this.movieList.filter(movie => movie.description.includes(this.searchInput))
    // const searchResults = [...titleMatch, ...descriptionMatch]
    // const results = titleMatch.length ? titleMatch : '<p>Sorry, no results matched your search.<p>'
    this.state.search(titleMatch)
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