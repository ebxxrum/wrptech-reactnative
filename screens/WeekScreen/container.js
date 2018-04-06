import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WeekScreen from './presenter';

class Container extends Component {
  render() {
    console.log("report container");
    console.log(this.props);
    return (
      <WeekScreen
        {...this.props.screenProps}
        logout={this._logout}
        goProfile={this._goProfile}
        goForm={this._goForm}
      />
    );
  }

  _logout = () => {
    const { logout } = this.props;
    console.log("_logout");
    console.log(logout);
    logout();
  };

  _goProfile = () => {
    this.props.navigation.navigate('Profile');
  };

  _goForm = () => {
    this.props.navigation.navigate('Form');
  };


}

export default Container;
