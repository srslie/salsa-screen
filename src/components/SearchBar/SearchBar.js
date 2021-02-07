import React, { Component } from 'react';
import './searchBar.css'

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

    const match = text => {
      return this.props.movies.filter(movie => {
        const textToLower = movie[text].toLowerCase()
        return textToLower.includes(event.target.value.toLowerCase())
      })
    }
    const titleMatch = match('title')
    // const overviewMatch = match('overview')
    // const searchResults = [...titleMatch, ...overviewMatch]
    // const results = searchResults.length ? searchResults : '<p>Sorry, no results matched your search.<p>'
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