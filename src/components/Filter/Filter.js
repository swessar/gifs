import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Images from '../Images/Images';

export default class Filter extends React.Component {
  constructor(props) {
    super(props);

    const { images } = this.props;

    this.state = {
      query: '',
      filteredImages: images,
      results: images
    }
  }

  doSearch(searchText) {
    const { images } = this.props;

    var filteredImages = {};
    Object.keys(images).map((key) => {
      for(var i = 0; i < images[key].keywords.length; i++) {
        if (images[key].keywords[i].indexOf(searchText) != -1) {
          filteredImages[key] = images[key];
        }
      }
    });

    this.setState({
      query: searchText,
      results: filteredImages
    });
  }

  render() {
    const { query, results } = this.state;

    return (
      <div className="Filter">
        <div className="Site-region">
          <SearchBar
            query={query}
            doSearch={this.doSearch.bind(this)}
            count={Object.keys(results).length}
          />
          <Images
            images={results}
            doSearch={this.doSearch.bind(this)}
          />
        </div>
      </div>
    )
  }
}
