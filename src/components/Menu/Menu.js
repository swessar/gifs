import React from 'react';
import { Link } from 'react-router';

export default class Menu extends React.Component {
  render() {
    return (
      <ul className="Menu">
        <li className="Menu-item"><Link to='/favorites' activeClassName="is-active">Favorites</Link></li>
      </ul>
    )
  }
}
