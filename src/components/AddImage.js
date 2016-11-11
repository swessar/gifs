import React from 'react';

export default class AddImage extends React.Component {
  constructor() {
    super();

    this.state = {
      visible: false
    }
  }

  submitForm () {
    console.log('submitForm');
  }

  render() {
    const visible = 'AddImage ' + (this.state.visible ? 'is-visible' : '');
    // const visible = 'AddImage';

    return (
      <div className={visible}>
        <div className="Site-region">
          <div className="AddImage-form">
            <input
              type="text"
              className="AddImage-url"
              placeholder="Url"
            />
            <input
              type="text"
              className="AddImage-keywords"
              placeholder="Keywords"
            />
            <button className="Button" onClick={this.submitForm.bind(this)}>Save</button>
          </div>
        </div>
      </div>
    )
  }
}
