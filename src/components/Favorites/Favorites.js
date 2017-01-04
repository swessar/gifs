import React from "react";
import { connect } from 'react-redux';
import { firebase, helpers } from 'react-redux-firebase';
const { isLoaded, isEmpty, dataToJS } = helpers;
import Filter from '../Filter/Filter';

@firebase()
@connect(
  ({firebase}) => ({
    images: dataToJS(firebase, 'images')
  })
)

@connect(
  state => ({
    favorites: state.favorites
  })
)

export default class Favorites extends React.Component {
  render() {
    const { images, favorites } = this.props;

    let gifs;
    if (!isLoaded(images)) {
      gifs = 'Loading...';
    } else {
      if ((isEmpty(images))) {
        gifs = 'Nothing found...';
      } else {
        var filteredImages = {};

        favorites.items.map((id, i) => {
          const image = Object.keys(images).filter(i => i === id);
          return filteredImages[image[0]] = images[image[0]];
        })

        gifs = <Filter images={filteredImages} />;
      }
    }

    // var filteredImages = {};
    // let gifs = !isLoaded(images)
    //   ? 'Loading...'
    //   : (isEmpty(images))
    //     ? 'Nothing found...'
    //     : <Filter images={
    //         favorites.items.map((id, i) => {
    //           const image = Object.keys(images).filter(i => i === id);
    //           return filteredImages[image[0]] = images[image[0]];
    //         })
    //       } />

    return (
      <div>
        {gifs}
      </div>
    )
  };
}
