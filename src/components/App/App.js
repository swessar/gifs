import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Match, Miss } from 'react-router';
import { getGifs } from '../../redux/actions/gifsActions';
import Header from '../Header/Header';
import AddImage from '../AddImage/AddImage';
import Frontpage from '../Frontpage/Frontpage';
import Favorites from '../Favorites/Favorites';
import NotFound from '../NotFound/NotFound';

class App extends React.Component {
  componentWillMount() {
    // Put the gifs in the store when App is initiated
    this.props.dispatch(getGifs());
  }

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

export default connect(
  state => ({
    gifs: state.gifs
  })
)(App);
