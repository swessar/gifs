import React from 'react';

export default class ImageForm extends React.Component {
  constructor(props) {
    super(props);
  }

  callFormSubmit (event) {
    const { formSubmit } = this.props;
    const { url, keywords } = this.refs;

    // Split & trim keywords
    let cleanKeywords = keywords.value.split(',').map(keyword => keyword.trim());

    formSubmit(url.value, cleanKeywords);

    event.preventDefault();
  }

  render () {
    const { imageUrl, keywords } = this.props;

    return (
      <form className="ImageForm" onSubmit={this.callFormSubmit.bind(this)}>
        <input type="text" ref="url" className="ImageForm-url" placeholder="Url" defaultValue={imageUrl} />
        <input type="text" ref="keywords" className="ImageForm-keywords" placeholder="Keywords" defaultValue={keywords} />
        <input type="submit" className="Button" value="Save" />
      </form>
    )
  }
}
