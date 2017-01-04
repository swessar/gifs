import React from 'react';
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

export default class Frontpage extends React.Component {
  render() {
    const { images } = this.props;

    let gifs = !isLoaded(images)
      ? 'Loading...'
      : (isEmpty(images))
        ? 'Nothing found...'
        : <Filter images={images} />;

    return (
      <div>
        {gifs}
      </div>
    )
  };
}
