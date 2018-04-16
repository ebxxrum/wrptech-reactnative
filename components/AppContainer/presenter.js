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
    const { isLoggedIn, initApp, accessToken } = this.props;
    if (isLoggedIn) {
      initApp(accessToken);
    }
  };

  render() {
    const { isLoggedIn, accessToken, profile, weeks, recent, recentWeekID, searchedWeek } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />
        {isLoggedIn && profile ? (
          <RootNavigation
            screenProps={{ accessToken: accessToken, profile: profile,
              weeks: weeks, recent: recent, recentWeekID: recentWeekID, searchedWeek: searchedWeek }}
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
