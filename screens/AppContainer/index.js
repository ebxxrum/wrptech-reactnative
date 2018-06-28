import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { actionCreators as userActions } from '../../redux/modules/user';
import { actionCreators as weekReportActions } from '../../redux/modules/weekReport';
import { actionCreators as calendarActions } from '../../redux/modules/calendar';

import { getProfile } from '../../redux/actions/UserActions';
import { getLoginStatus, getAccessToken, getUser } from '../../redux/reducers/UserReducer';


import { View, Text, StatusBar, StyleSheet,AsyncStorage } from 'react-native';
import LoggedOutNavigation from '../../navigation/LoggedOutNavigation';
import RootNavigation from '../../navigation/RootNavigation';
import { getCalendar } from '../CalendarScreen/caledarReducer';

class AppContainer extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    initApp: PropTypes.func.isRequired,
    initWeek: PropTypes.func.isRequired,
    initReport: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { isLoggedIn, initApp, initWeek, initReport, accessToken, profile, weeks } = this.props;

    if (isLoggedIn) {
      // this.props.dispatch(getProfile(this.props.accessToken));
      initApp(accessToken);

      if (profile) {
        initWeek(accessToken, profile);

        if (weeks) {
          initReport(accessToken, weeks[0]);
        }
      }
    }
  };

  render() {
    const { isLoggedIn, logout } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />
        { isLoggedIn ? <RootNavigation screenProps={{logout: logout}}/> : <LoggedOutNavigation /> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

const mapStateToProps = (state, ownProps) => {
  const { user, calendar } = state;
  return {
    isLoggedIn: getLoginStatus(state), 
    accessToken: getAccessToken(state), 
    profile: getUser(state),
    // weeks: getCalendar(state),
    // isLoggedIn: user.isLoggedIn,
    // accessToken: user.accessToken,
    // profile: user.profile,
    weeks: calendar.data,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initApp: (accessToken) => {
      dispatch(userActions.getProfile(accessToken));
    },
    initWeek: (accessToken, profile) => {
      dispatch(calendarActions.getWeeks(accessToken, 1, profile));
    },
    initReport: (accessToken, week) => {
      dispatch(weekReportActions.getWeekReport(accessToken, week));
    },
    logout: () => {
      return dispatch(userActions.logout());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
