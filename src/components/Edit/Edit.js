import React from 'react';
import { connect } from 'react-redux';
import { firebase, helpers } from 'react-redux-firebase';
import ImageForm from '../ImageForm/ImageForm';

const { isLoaded, isEmpty, dataToJS } = helpers;

@firebase()
@connect(
  ({firebase}) => ({
    images: dataToJS(firebase, 'images')
  })
)

export default class Edit extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { firebase, images, params } = this.props;
    const image = images[params[0]];
    const keywords = image.keywords.join(', ');

    const formSubmit = (url, keywords) => {
      // Update image in firebase
      firebase.set(`/images/${params[0]}`, {
        gif: url,
        image: 'images/1.jpg',
        keywords: keywords
      });

      console.log('uppdaterat!');
    }

    return (
      <div className="Site-region">
        <ImageForm
          formSubmit={formSubmit}
          imageUrl={image.gif}
          keywords={keywords}
        />
      </div>
    )
  }
}
