import React from 'react';
import Header from './Header';
import AddImage from './AddImage';
import Filter from './Filter';
import data from '../data';

export default class App extends React.Component {
  render() {
    return (
      <div className="Site">
        <Header />
        <AddImage />
        <Filter images={data.images} />
      </div>
    )
  }
}
