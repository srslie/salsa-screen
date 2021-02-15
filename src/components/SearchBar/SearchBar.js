import React, { Component } from 'react';
import './searchBar.css';
import TextField from '@material-ui/core/TextField';

class SearchBar extends Component {
  constructor(props) {
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
        return movie[text] ?
          movie[text].toLowerCase().includes(event.target.value.toLowerCase())
          : movie[text]
      })
    }
    const titleMatch = match('title')
    const overviewMatch = match('overview')
    const searchResults = [...titleMatch, ...overviewMatch]
    const results = searchResults.length ? searchResults : 'Sorry, no results matched your search.'
    this.props.showSearchResults(results)
  }

  render() {
    return (
      <form className="searchBar" noValidate autoComplete="off">
        <TextField id="search-input" label="search-input" variant="outlined" color="white" className="search-input" value={this.state.searchInput} placeholder="🔍 Type to search..." onChange={event => this.handleChange(event)} />
      </form>
    )
  }
}

export default SearchBar;