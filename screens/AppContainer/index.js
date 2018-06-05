import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { actionCreators as userActions } from '../../redux/modules/user';
import { actionCreators as weekReportActions } from '../../redux/modules/weekReport';
import { actionCreators as calendarActions } from '../../redux/modules/calendar';

import { View, Text, StatusBar, StyleSheet,AsyncStorage } from 'react-native';
import LoggedOutNavigation from '../../navigation/LoggedOutNavigation';
import RootNavigation from '../../navigation/RootNavigation';

class AppContainer extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    initApp: PropTypes.func.isRequired,
    initWeek: PropTypes.func.isRequired,
    initReport: PropTypes.func.isRequired
  };

  componentWillMount() {
    const { isLoggedIn, initApp, initWeek, initReport, accessToken, profile, weeks } = this.props;

    if (isLoggedIn) {
      initApp(accessToken);
    }

    if (profile) {
      initWeek(accessToken, profile);
    }

    if (weeks) {
      initReport(accessToken, weeks[0]);
    }
  };

  // componentDidMount() {
  //   const { initReport, accessToken, weeks } = this.props;
  //   if (weeks) {
  //     console.log("componentDidMount");
  //     initReport(accessToken, weeks[0]);
  //   }
  // }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />
        { isLoggedIn ? <RootNavigation screenProps={{recentWeek: this.props.recentWeek}}/> : <LoggedOutNavigation /> }
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
  const { user, calendar, weekReport } = state;
  return {
    isLoggedIn: user.isLoggedIn,
    accessToken: user.accessToken,
    profile: user.profile,
    weeks: calendar.data,
    recentWeek: weekReport
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initApp: (accessToken) => {
      dispatch(userActions.getProfile(accessToken));
    },
    initWeek: (accessToken, profile) => {
      dispatch(calendarActions.getWeeks(accessToken, null, profile));
    },
    initReport: (accessToken, week) => {
      dispatch(weekReportActions.getWeekReport(accessToken, week));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
