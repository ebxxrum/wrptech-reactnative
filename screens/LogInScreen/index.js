import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-native';

import { login } from '../../redux/actions/UserActions';
import LogInScreen from './LogInScreen';

class Container extends Component {
  state = {
    email: '',
    password: '',
    isSubmitting: false
  };

  render() {
    return (
      <LogInScreen
        {...this.state}
        changeEmail={this._changeEmail}
        changePassword={this._changePassword}
        submit={this._submit}
        join={this._join}
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

  _join = () => {
    this.props.navigation.navigate('Join');
  };

  _submit = async() => {
    const { email, password, isSubmitting } = this.state;
    if (!isSubmitting) {
      if (email && password) {
        this.setState({
          isSubmitting: true
        });
        const loginResult = await this.props.login(email, password);
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
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => {
      return dispatch(login(email, password));
    }
  };
};

Container.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Container);
