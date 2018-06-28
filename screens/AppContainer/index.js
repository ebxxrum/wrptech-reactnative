import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getProfile, logout } from '../../redux/actions/UserActions';
import { getWeeks } from '../../redux/actions/CalendarActions';
import { getWeekReport } from '../../redux/actions/WeekReportActions';

import { getLoginStatus, getAccessToken, getUser } from '../../redux/reducers/UserReducer';
import { getRecentWeek } from '../../redux/reducers/CaledarReducer';

import { View, StatusBar, StyleSheet } from 'react-native';
import LoggedOutNavigation from '../../navigation/LoggedOutNavigation';
import RootNavigation from '../../navigation/RootNavigation';

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { isLoggedIn, initApp, initWeek, initReport, accessToken, profile, recent_week } = this.props;

    if (isLoggedIn) {
      initApp(accessToken);

      if (profile) {
        initWeek(accessToken, profile);

        if (recent_week) {
          initReport(accessToken, recent_week);
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

const mapStateToProps = state => {
  return {
    isLoggedIn: getLoginStatus(state), 
    accessToken: getAccessToken(state), 
    profile: getUser(state),
    recent_week: getRecentWeek(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initApp: (accessToken) => {
      return dispatch(getProfile(accessToken));
    },
    initWeek: (accessToken, profile) => {
      return dispatch(getWeeks(accessToken, 1, profile));
    },
    initReport: (accessToken, week) => {
      return dispatch(getWeekReport(accessToken, week));
    },
    logout: () => {
      return dispatch(logout());
    }
  };
};

AppContainer.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  initApp: PropTypes.func.isRequired,
  initWeek: PropTypes.func.isRequired,
  initReport: PropTypes.func.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
