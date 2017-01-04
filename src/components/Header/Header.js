import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { openForm } from '../../redux/actions/openFormActions';
import Menu from '../Menu/Menu';

class Header extends React.Component {
  toggleForm (formState) {
    this.props.dispatch(openForm(formState));
  }

  render() {
    const { openForm } = this.props;

    return (
      <div className="Header">
        <div className="Site-region">
          <div className="Header-inner">
            <h1 className="Header-logo"><Link to='/'>Gifs</Link></h1>
            <Menu />
            <button className="Button" onClick={() => this.toggleForm(openForm)}>Add GIF</button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    openForm: state.openForm.openForm
  })
)(Header);
