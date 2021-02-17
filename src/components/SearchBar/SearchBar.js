import React, { Component } from 'react';
import './searchBar.css';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';



class SearchBar extends Component {
  constructor(props) {
    super();
    this.state = {
      searchInput: '',
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
      <form 
        className="search-bar" 
        noValidate 
        autoComplete="off"
      >
        <SearchIcon className="search-icon" />
        <Input 
          id="search-input" 
          className="search-input" 
          placeholder="Type to search..." 
          onChange={event => this.handleChange(event)} 
          value={this.state.searchInput}  
          aria-label='search input' 
        />
      </form>
    )
  }
}

export default SearchBar;