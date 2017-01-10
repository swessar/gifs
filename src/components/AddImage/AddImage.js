import React from 'react';
import { connect } from 'react-redux';
import { firebase, helpers } from 'react-redux-firebase';
import ImageForm from '../ImageForm/ImageForm';

const { isLoaded, isEmpty, dataToJS } = helpers;

@firebase()
@connect(
  state => ({
    openForm: state.openForm.openForm
  })
)

export default class AddImage extends React.Component {
  render() {
    const { firebase, openForm } = this.props;

    const formSubmit = (url, keywords) => {
      const { ImageForm } = this.refs;

      // Save image to firebase
      firebase.push('/images', {
        gif: url,
        image: 'images/1.jpg',
        keywords: keywords
      });

      // Reset inputs
      ImageForm.refs.url.value = '';
      ImageForm.refs.keywords.value = '';

      console.log('sparat!');
    }

    return (
      <div className={ 'AddImage' + (openForm ? ' is-visible' : '') }>
        <div className="Site-region">
          <ImageForm
            ref="ImageForm"
            formSubmit={formSubmit}
            imageUrl={null}
            keywords={null}
          />
        </div>
      </div>
    )
  }
}
