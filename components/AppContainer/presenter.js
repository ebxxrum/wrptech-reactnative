import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StatusBar, StyleSheet,AsyncStorage } from 'react-native';
import LoggedOutNavigation from '../../navigation/LoggedOutNavigation';
import RootNavigation from '../../navigation/RootNavigation';

class AppContainer extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    initApp: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { isLoggedIn, initApp, accessToken, weeks } = this.props;
    console.log("componentDidMount");
    if (weeks) {
      // TODO week 기준 (수) 수정 필요!
      var weekID = weeks[0].id;
    }
    if (isLoggedIn) {
      initApp(accessToken, weekID, weeks);
    }
  };

  render() {
    const { isLoggedIn, accessToken, profile, thisWeek, weeks, recent, recentWeekID } = this.props;
    console.log("Appcontainer");
    if (weeks) {
      // TODO week 기준 (수) 수정 필요!
      var weekID = weeks[0].id;
    }

    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />
        {isLoggedIn && profile ? (
          <RootNavigation
            screenProps={{ accessToken: accessToken, profile: profile,
              weeks: weeks, recent: recent, recentWeekID: recentWeekID, thisWeek: thisWeek, weekID: weekID }}
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

export default AppContainer;
