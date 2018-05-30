import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { isLoggedIn, initApp, initReport, accessToken, weeks, profile } = this.props;
    if (isLoggedIn) {
      initApp(accessToken);
    }
    if (weeks) {
      initReport(accessToken, weeks[0], profile);
    }
  };

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

export default AppContainer;
