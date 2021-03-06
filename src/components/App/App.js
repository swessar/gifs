import React from 'react';
import { connect } from 'react-redux';
import { firebase, helpers } from 'react-redux-firebase';
import { BrowserRouter as Router, Match, Miss } from 'react-router';
import Header from '../Header/Header';
import AddImage from '../AddImage/AddImage';
import Frontpage from '../Frontpage/Frontpage';
import Favorites from '../Favorites/Favorites';
import Edit from '../Edit/Edit';
import NotFound from '../NotFound/NotFound';

const { isLoaded, isEmpty, dataToJS } = helpers;

// @firebase()
// export default class App extends React.Component {
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="Site">
          <Header />
          <AddImage />
          <Match exactly pattern="/" component={Frontpage}/>
          <Match pattern="/favorites" component={Favorites}/>
          <Match exactly pattern="/edit/*" component={Edit}/>
          <Miss component={NotFound}/>
        </div>
      </Router>
    )
  }
}

// export default firebase()(App);

const fbApp = firebase([
  '/images'
])(App);

export default connect(
  ({firebase}) => ({
    images: dataToJS(firebase, 'images')
  })
)(fbApp);

// export default connect(
//   state => ({
//     gifs: state.gifs
//   })
// )(App);
