import React from 'react';

export default class SearchBar extends React.Component {
  doSearch() {
    let query = this.refs.searchInput.value;
    this.props.doSearch(query);
  }
  
  render() {
    return (
      <div className="SearchBar">
        <input
          type="text"
          className="SearchBar-input"
          ref="searchInput"
          placeholder="Search keywords..."
          value={this.props.query}
          onChange={this.doSearch.bind(this)}
        />
      </div>
    )
  }
}