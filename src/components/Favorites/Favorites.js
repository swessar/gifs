import React from "react";
import { connect } from 'react-redux';
// import { store } from '../../redux/createStore';
import Filter from '../Filter/Filter';

class Favorites extends React.Component {
  constructor() {
    super();

    this.state = {
      filteredImages: null
    }
  }

  componentWillMount() {
    const { gifs, favorites } = this.props;

    let filteredImages = favorites.items.map((id, i) => {
      const image = gifs.images.filter(i => i.id === id);
      return image[0];
    });

    this.setState({
      filteredImages: filteredImages
    });
  }

  // componentDidMount() {
  //   store.subscribe(() =>
  //     this.forceUpdate()
  //   );
  // }

  render() {
    return (
      <Filter images={this.state.filteredImages} />
    )
  };
}

export default connect(
  state => ({
    gifs: state.gifs,
    favorites: state.favorites
  })
)(Favorites);
