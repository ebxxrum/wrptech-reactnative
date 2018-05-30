import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProfileScreen from './presenter';
import { actionCreators as userActions } from '../../redux/modules/user';

class Container extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "마이페이지"
    };
  };

  static propTypes = {
    logout: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

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
    logout();
  };
}

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return {
    profile: user.profile
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      return dispatch(userActions.logout());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
