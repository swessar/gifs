import React from 'react';
import { BrowserRouter as Router, Match, Miss } from 'react-router';
import Header from '../Header/Header';
import AddImage from '../AddImage/AddImage';
import Frontpage from '../Frontpage/Frontpage';
import Favorites from '../Favorites/Favorites';
import NotFound from '../NotFound/NotFound';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="Site">
          <Header />
          <AddImage />
          <Match exactly pattern="/" component={Frontpage}/>
          <Match pattern="/favorites" component={Favorites}/>
          <Miss component={NotFound}/>
        </div>
      </Router>
    )
  }
}
