import React from "react";
import { connect } from 'react-redux';
import Filter from './Filter';
import data from '../data';

class Favorites extends React.Component {
  componentWillMount() {
    const { favorites } = this.props;

    let filteredImages = favorites.items.map((id, i) => {
      const image = data.images.filter(i => i.id === id);
      return image[0];
    });

    this.setState({
      filteredImages: filteredImages
    });
  }

  render() {
    return (
      <Filter images={this.state.filteredImages} />
    )
  };
}

export default connect(
  state => ({
    favorites: state.favorites
  })
)(Favorites);
