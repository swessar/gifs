import React from 'react';
import { connect } from 'react-redux';
import { firebase, helpers } from 'react-redux-firebase';
const { isLoaded, isEmpty, dataToJS } = helpers;

@firebase()
// @firebase([
//   '/images'
// ])
// @connect(
//   ({firebase}) => ({
//     images: dataToJS(firebase, 'images')
//   })
// )

@connect(
  state => ({
    openForm: state.openForm.openForm
  })
)

export default class AddImage extends React.Component {
  render() {
    const { firebase, openForm } = this.props;

    const submitForm = () => {
      const { url, keywords } = this.refs;

      // Save image to firebase
      firebase.push('/images', {
        gif: url.value,
        image: 'images/1.jpg',
        keywords: [keywords.value]
      });

      // Reset inputs
      url.value = '';
      keywords.value = '';
    }

    return (
      <div className={ 'AddImage' + (openForm ? ' is-visible' : '') }>
        <div className="Site-region">
          <div className="AddImage-form">
            <input type="text" ref="url" className="AddImage-url" placeholder="Url" />
            <input type="text" ref="keywords" className="AddImage-keywords" placeholder="Keywords" />
            <button className="Button" onClick={submitForm}>Save</button>
          </div>
        </div>
      </div>
    )
  }
}
