import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReportScreen from './presenter';

class Container extends Component {
  render() {
    return (
      <ReportScreen
        logout={this._logout}
      />
    );
  }

  _logout = () => {
    const { logout } = this.props;
    console.log("_logout");
    console.log(logout);
    logout();
  };
}

export default Container;
