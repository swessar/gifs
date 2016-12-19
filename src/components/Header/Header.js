import React from 'react';
import { Link } from 'react-router';
import Menu from '../Menu/Menu';

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
            <h1 className="Header-logo"><Link to='/'>Gifs</Link></h1>
            <Menu />
            <button className="Button" onClick={this.addLink.bind(this)}>Add GIF</button>
          </div>
        </div>
      </div>
    )
  }
}
