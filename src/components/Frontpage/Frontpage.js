import React from "react";
import { connect } from 'react-redux';
import Filter from '../Filter/Filter';

class Frontpage extends React.Component {
  render() {
    const { gifs } = this.props;

    return (
      <Filter images={gifs.images} />
    )
  };
}

export default connect(
  state => ({
    gifs: state.gifs
  })
)(Frontpage);
