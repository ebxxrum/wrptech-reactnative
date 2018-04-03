import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfileScreen from './presenter';

class Container extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };

  componentDidMount = () => {
    const { accessToken } = this.props.screenProps;
    if (accessToken) {
      console.log("accessToken");
      console.log(accessToken);
      this.setState({
        isFetching: false
      });
    }
  };

  render() {
    return (
      <ProfileScreen
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
