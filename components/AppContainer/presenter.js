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
    const { isLoggedIn, initApp, accessToken, weeks, page } = this.props;
    console.log("componentDidMount");
    if (weeks) {
      var weekID = weeks[1].id;
    }
    if (isLoggedIn) {
      console.log(weekID);
      initApp(accessToken, page, weekID);
    }
  };

  render() {
    const { isLoggedIn, accessToken, profile, thisWeek } = this.props;
    console.log("Appcontainer");
    console.log(this.props);
    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />
        {isLoggedIn && profile ? (
          <RootNavigation
            screenProps={{ profile: profile, thisWeek: thisWeek }}
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
