import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { actionCreators as userActions } from '../../redux/modules/user';
import { actionCreators as weeksActions } from '../../redux/modules/weeks';
import { actionCreators as weekReportActions } from '../../redux/modules/weekReport';
import { actionCreators as calendarActions } from '../../redux/modules/calendar';

import { View, Text, StatusBar, StyleSheet,AsyncStorage } from 'react-native';
import LoggedOutNavigation from '../../navigation/LoggedOutNavigation';
import RootNavigation from '../../navigation/RootNavigation';

class AppContainer extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    initApp: PropTypes.func.isRequired,
    initReport: PropTypes.func.isRequired
  };

  componentWillMount() {
    const { isLoggedIn, initApp, accessToken, profile } = this.props;
    if (isLoggedIn && profile) {
      initApp(accessToken, profile);
    }
  };

  componentDidMount() {
    const { initReport, accessToken, weeks } = this.props;
    if (weeks) {
      initReport(accessToken, weeks[0]);
    }
  }

  render() {
    const { isLoggedIn, accessToken, profile, weeks, recentArray } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />
        {isLoggedIn && profile ? (
          <RootNavigation
            screenProps={{ accessToken: accessToken, profile: profile,
              weeks: weeks, recentArray: recentArray }}
          />
        ) : (
          <LoggedOutNavigation />
        )}
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
  const { user, weeks, calendar } = state;
  return {
    isLoggedIn: user.isLoggedIn,
    accessToken: user.accessToken,
    profile: user.profile,
    weeks: calendar.data,
    recentArray: weeks.recentArray
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initApp: (accessToken, profile) => {
      dispatch(userActions.getProfile(accessToken));
      dispatch(weeksActions.getWeeks(accessToken, 1));
      dispatch(calendarActions.getWeeks(accessToken, null, profile));
    },
    initReport: (accessToken, week) => {
      dispatch(weeksActions.getRecent(accessToken, week));
      dispatch(weekReportActions.getWeekReport(accessToken, week));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
