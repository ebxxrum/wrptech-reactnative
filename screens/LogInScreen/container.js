import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';
import LogInScreen from './presenter';

class Container extends Component {
  state = {
    email: '',
    password: '',
    isSubmitting: false
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
  };

  render() {
    return (
      <LogInScreen
        {...this.state}
        changeEmail={this._changeEmail}
        changePassword={this._changePassword}
        submit={this._submit}
      />
    );
  }

  _changeEmail = text => {
    this.setState({
      email: text
    });
  };

  _changePassword = text => {
    this.setState({
        password: text
    });
  };

  _submit = async() => {
    const { email, password, isSubmitting } = this.state;
    const { login } = this.props;
    if (!isSubmitting) {
      if (email && password) {
        this.setState({
          isSubmitting: true
        });
        const loginResult = await login(email, password);
        console.log("--------");
        console.log(loginResult);
        if (!loginResult) {
          Alert.alert('Try again');
          this.setState({
            isSubmitting: false
          });
        }
      } else {
        Alert.alert('All fields are required!');
      }
    }
  };
}

export default Container;
