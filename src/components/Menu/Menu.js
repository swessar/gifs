import React from 'react';
import { Link } from 'react-router';

const Menu = () => {
  return (
    <ul className="Menu">
      <li className="Menu-item"><Link to='/favorites' activeClassName="is-active">Favorites</Link></li>
    </ul>
  )
}

export default Menu;
