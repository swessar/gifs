import React from 'react';

export default class Header extends React.Component {
  addLink () {
    console.log('addLink');

    // mount form
  }

  render() {
    return (
      <div className="Header">
        <div className="Site-region">
          <div className="Header-inner">
            <h1 className="Header-logo">Gifs</h1>
            <button className="Button" onClick={this.addLink.bind(this)}>Add GIF</button>
          </div>
        </div>
      </div>
    )
  }
}