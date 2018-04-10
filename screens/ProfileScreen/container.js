import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfileScreen from './presenter';

class Container extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "마이페이지"
    };
  };

  static propTypes = {
    logout: PropTypes.func.isRequired
  };

  componentDidMount = () => {
    const { accessToken } = this.props.screenProps;
    if (accessToken) {
      this.setState({
        isFetching: false
      });
    }
  };

  render() {
    return (
      <ProfileScreen
        {...this.props}
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
