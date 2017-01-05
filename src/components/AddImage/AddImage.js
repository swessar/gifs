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

    const submitForm = (event) => {
      const { url, keywords } = this.refs;

      // Split & trim keywords
      let cleanKeywords = keywords.value.split(',').map(keyword => keyword.trim());

      // Save image to firebase
      firebase.push('/images', {
        gif: url.value,
        image: 'images/1.jpg',
        keywords: cleanKeywords
      });

      // Reset inputs
      url.value = '';
      keywords.value = '';

      event.preventDefault();
    }

    return (
      <div className={ 'AddImage' + (openForm ? ' is-visible' : '') }>
        <div className="Site-region">
          <form className="AddImage-form" onSubmit={submitForm}>
            <input type="text" ref="url" className="AddImage-url" placeholder="Url" />
            <input type="text" ref="keywords" className="AddImage-keywords" placeholder="Keywords" />
            <input type="submit" className="Button" value="Save" />
          </form>
        </div>
      </div>
    )
  }
}
