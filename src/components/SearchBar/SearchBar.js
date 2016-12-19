import React from 'react';

export default class SearchBar extends React.Component {
  callSearch() {
    let query = this.refs.searchInput.value;
    this.props.doSearch(query);
  }

  render() {
    const { query, count } = this.props;

    return (
      <div className="SearchBar">
        <input
          type="text"
          className="SearchBar-input"
          ref="searchInput"
          placeholder="Search keywords..."
          value={query}
          onChange={this.callSearch.bind(this)}
        />
        <div className="SearchBar-counter">{count} images found</div>
      </div>
    )
  }
}
