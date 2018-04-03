import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReportScreen from './presenter';
import { actionCreators as userActions } from '../../redux/modules/user';

class Container extends Component {
  render() {
    console.log("report container");

    return (
      <ReportScreen
        {...this.props.screenProps}
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

  _getProfile = () => {
    const { profile } = this.props;
    console.log("getProfile");
    console.log(this.props);
    getProfile();
  };
}

export default Container;
