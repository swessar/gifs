import React from 'react';
import SearchBar from './SearchBar';
import Images from './Images';

export default class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      filteredImages: this.props.images,
      results: this.props.images
    }
  }

  doSearch(searchText) {
    let filteredImages = this.props.images.filter((image) => {
      for(var i = 0; i < image.keywords.length; i++) {
        if (image.keywords[i].indexOf(searchText) != -1) {
          return image;
        }
      }
    });

    this.setState({
      query: searchText,
      results: filteredImages
    });
  }

  render() {
    return (
      <div className="Filter">
        <div className="Site-region">
          <SearchBar
            query={this.state.query}
            doSearch={this.doSearch.bind(this)}
            count={this.state.results.length} />
          <Images
            images={this.state.results}
            doSearch={this.doSearch.bind(this)} />
        </div>
      </div>
    )
  }
}